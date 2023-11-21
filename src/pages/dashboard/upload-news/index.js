import useAuth from "@/hooks/useAuth";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useimg from "../../../assets/dashboard/user.png";
import { getCookie } from "../../../utilities/helper.js";
import AddCatehoreyForm from "./AddCatehoreyForm";
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //get categoreies  ${process.env.REACT_APP_API}
  const [categoreyList, setCategoreyList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API}/api/categorey-data-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCategoreyList(data));
  }, []);

  const addCategoryToList = async (newCategory) => {
    try {
      // Update the category list when a new category is added
      setCategoreyList((prevCategories) => [...prevCategories, newCategory]);

      // Fetch the latest category list from the server
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/categorey-data-list`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      if (response.ok) {
        const updatedCategoryList = await response.json();
        setCategoreyList(updatedCategoryList);
      } else {
        console.error("Failed to fetch updated category list");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //division district
  const { user, setUser, isLoading } = useAuth();
  const [title, setTitle] = useState("");
  const [newsDetailsText, setNewsDetailsText] = useState("");
  const [categoreyName, setCategoreyName] = useState("");
  const [data, setData] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

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

  //division district  end........................................

  const [imgData, setImgData] = useState(null);
  const [previewSrc, setPreviewSrc] = useState([]);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (event) => {
        previews.push(event.target.result);
        setPreviewSrc(previews);
      };

      reader.readAsDataURL(files[i]);
    }
  };

  const router = useRouter();
  const submitDataForm = async (e) => {
    e.preventDefault();
    const postData = {
      userId: user._id,
      categoreyId: categoreyName,
      newsTitle: title,
      categoreyName: categoreyName,
      divisionName: selectedDivision,
      districtName: selectedDistrict,
      upazilaName: selectedUpazila,
      newsDetailsText: newsDetailsText,
      newsImage: previewSrc[0],
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/upload-news-data`,
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
        router.push("/dashboard/news-list");
      } else {
        showToastMessage("error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-10">
      <ToastContainer />
      <div className="bg-gray-100 mx-auto max-w-6xl  py-10 px-12 lg:px-24 shadow-xl mb-24">
        <p className="text-center font-semibold uppercase my-2">Upload news</p>
        <button
          onClick={openModal}
          className="text-right right-0 p-4 bg-black text-white mb-2"
        >
          Add Catgorey
        </button>
        <AddCatehoreyForm
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddCategory={addCategoryToList}
        ></AddCatehoreyForm>
        <form onSubmit={submitDataForm}>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="md:w-full px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="company"
              >
                News Title
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                id="company"
                type="text"
                name="newsTitle"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tutsplus"
              />
              {/*     <div>
                  <span className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </span>
                </div> */}
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 ">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Upload Image
                </label>
                <div>
                  <div className="flex items-center">
                    {previewSrc[0] ? (
                      <Image
                        src={previewSrc[0]}
                        alt="Avatar"
                        id="file-input"
                        width={16}
                        height={16}
                        className="w-16 h-16 rounded-full"
                      />
                    ) : (
                      <Image
                        src={useimg}
                        alt="Avatar"
                        className="w-16 h-16 rounded-full"
                      />
                    )}
                    <input
                      type="file"
                      name="newsImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="ml-2 p-1 w-full text-slate-500 text-sm rounded-full leading-6 file:bg-violet-200 file:text-violet-700 file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-full hover:file:bg-violet-100 border border-gray-300"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Categorey
                </label>
                <div>
                  <select
                    className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location"
                    name="categoreyName"
                    onChange={(e) => setCategoreyName(e.target.value)}
                  >
                    {categoreyList.map((name) => (
                      <option key={name._id} value={name._id}>
                        {name.categoreyName}
                      </option>
                    ))}
                  </select>
                </div>
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

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 ">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="application-link"
                >
                  Write News
                </label>

                <DefaultEditor
                  value={newsDetailsText}
                  onChange={(e) => setNewsDetailsText(e.target.value)}
                  name="newsDetailsText"
                  containerProps={{ style: { height: "500px" } }}
                ></DefaultEditor>
              </div>
            </div>
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button
                  onClick={submitDataForm}
                  className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
                >
                  Button
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
