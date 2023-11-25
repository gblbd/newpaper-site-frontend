import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getCookie } from "../../../utilities/helper.js";
const index = () => {
  const showToastMessage = (sms) => {
    if (sms === "success") {
      toast.success("uploaded success", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  //division district
  const { user, setUser, isLoading } = useAuth();

  const [data, setData] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/rajuAhmed1705/bangladesh-address/master/src/json/bd-upazila.json"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const uniqueDivisions = Array.from(
      new Set(data.map((item) => item.division))
    );
    setDivisions(uniqueDivisions);
  }, [data]);

  // Filter districts based on the selected division
  useEffect(() => {
    if (selectedDivision) {
      const districts = data
        .filter((item) => item.division === selectedDivision)
        .map((item) => item.district);
      const uniqueDistricts = Array.from(new Set(districts));
      setFilteredDistricts(uniqueDistricts);
    }
  }, [selectedDivision, data]);

  // Filter upazilas based on the selected division and district
  useEffect(() => {
    if (selectedDivision && selectedDistrict) {
      const upazilas = data
        .filter(
          (item) =>
            item.division === selectedDivision &&
            item.district === selectedDistrict
        )
        .map((item) => item.upazila);
      const uniqueUpazilas = Array.from(new Set(upazilas));
      setFilteredUpazilas(uniqueUpazilas);
    }
  }, [selectedDivision, selectedDistrict, data]);
  // Handle division change
  const handleDivisionChange = (event) => {
    const division = event.target.value;
    setSelectedDivision(division);
    setSelectedDistrict(""); // Reset district and upazila when division changes
    setSelectedUpazila("");
  };

  // Handle district change
  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setSelectedUpazila(""); // Reset upazila when district changes
  };

  // Handle upazila change
  const handleUpazilaChange = (event) => {
    const upazila = event.target.value;
    setSelectedUpazila(upazila);
  };
  const [videoData, setVideoData] = useState({});
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...videoData };
    newData[field] = value;

    setVideoData(newData);
  };

  const router = useRouter();
  const submitDataForm = async (e) => {
    e.preventDefault();
    const postData = {
      userId: user._id,
      ...videoData,
      divisionName: selectedDivision,
      districtName: selectedDistrict,
      upazilaName: selectedUpazila,
    };
    console.log("sub", postData);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/news-video-upload`,
        postData,
        {
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      if (response.status === 200) {
        showToastMessage("success");
        console.log(response);
        router.push("/dashboard/video-news-list");
      } else {
        showToastMessage("error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-10">
      <div className="bg-gray-100 mx-auto max-w-6xl  py-10 px-12 lg:px-24 shadow-xl mb-24">
        <p className="text-center font-semibold uppercase my-2">
          Upload video news
        </p>
        <form onSubmit={submitDataForm}>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            {/*      <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="company"
                >
                  Company Name*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="Tutsplus"
                />
                <div>
                  <span className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="title"
                >
                  Title*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="Software Engineer"
                />
              </div>
            </div> */}
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="application-link"
                >
                  Video News Title
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link"
                  type="text"
                  name="newsVideoTitle"
                  onChange={handelOnChange}
                  placeholder="Video News Title"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="application-link"
                >
                  Youtube URL
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link"
                  type="text"
                  name="newsVideoUrl"
                  onChange={handelOnChange}
                  placeholder="http://...."
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  DIVISION
                </label>
                <div>
                  <select
                    className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location"
                    name="divisionName"
                    value={selectedDivision}
                    onChange={handleDivisionChange}
                  >
                    <option value="">Select Division</option>
                    {divisions.map((division, index) => (
                      <option key={index} value={division}>
                        {division}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="job-type"
                >
                  DISTRICT
                </label>
                <div>
                  <select
                    className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="job-type"
                    name="districtName"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                  >
                    <option value="">Select District</option>
                    {filteredDistricts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="department"
                >
                  UPAZILA
                </label>
                <div>
                  <select
                    className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="department"
                    name="upazilaName"
                    value={selectedUpazila}
                    onChange={handleUpazilaChange}
                  >
                    <option value="">Select Upazila</option>
                    {filteredUpazilas.map((upazila, index) => (
                      <option key={index} value={upazila}>
                        {upazila}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button
                  onClick={submitDataForm}
                  className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
