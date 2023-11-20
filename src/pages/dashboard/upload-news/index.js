import Image from "next/image";
import { useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useimg from "../../../assets/dashboard/user.png";
const index = () => {
  const notify = () => toast("Wow so easy!");
  const [value, setValue] = useState("");

  /*  function onChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  } */
  return (
    <div className="mt-10">
      <ToastContainer />
      <div className="bg-gray-100 mx-auto max-w-6xl  py-10 px-12 lg:px-24 shadow-xl mb-24">
        <p className="text-center font-semibold uppercase my-2">Upload news</p>
        <form>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
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
                  placeholder="Tutsplus"
                />
                {/*     <div>
                  <span className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </span>
                </div> */}
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
                  >
                    <option>Abuja</option>
                    <option>Enugu</option>
                    <option>Lagos</option>
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
                  >
                    <option>Abuja</option>
                    <option>Enugu</option>
                    <option>Lagos</option>
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
                  >
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Internship</option>
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
                  >
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Customer Support</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="location"
              >
                Upload Image
              </label>
              <div>
                <div class="flex items-center">
                  <Image
                    src={useimg}
                    alt="Avatar"
                    class="w-16 h-16 rounded-full"
                  />
                  <input
                    type="file"
                    class="ml-4 p-1 w-full text-slate-500 text-sm rounded-full leading-6 file:bg-violet-200 file:text-violet-700 file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-full hover:file:bg-violet-100 border border-gray-300"
                  />
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
                  value={value}
                  containerProps={{ style: { height: "500px" } }}
                ></DefaultEditor>
              </div>
            </div>
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
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
