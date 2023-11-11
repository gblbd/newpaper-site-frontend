import Image from "next/image";
import { useState } from "react";
import add2 from "../../assets/details/add2.png";
const RightPart = () => {
  const [activeTab, setActiveTab] = useState("first");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="border border-gray-300  w-full p-2">
        <div className="rounded border mx-auto mt-4">
          {/* Tabs */}
          <ul className="inline-flex pt-2 px-1 w-full border-b">
            <li
              className={`${
                activeTab === "first"
                  ? "bg-white border-t border-r border-l -mb-px"
                  : ""
              } px-4 text-gray-800 font-semibold py-2 rounded-t cursor-pointer`}
              onClick={() => handleTabClick("first")}
            >
              <p> সর্বশেষ</p>
            </li>
            <li
              className={`${
                activeTab === "second" ? "bg-white" : ""
              } px-4 text-gray-800 font-semibold py-2 rounded-t cursor-pointer`}
              onClick={() => handleTabClick("second")}
            >
              জনপ্রিয়
            </li>
          </ul>

          {/* Tab Contents */}
          <div id="tab-contents">
            <div>
              <div
                id="first"
                className={`p-2 flex gap-2 ${
                  activeTab === "first" ? "" : "hidden"
                } items-center`}
              >
                <div className="bg-[#D9D9D9] lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <p className="text-black">1</p>
                </div>
                <p className="text-left lg:font-normal sm:font-light">
                  এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রীw
                </p>
              </div>
              <div
                id="second"
                className={`p-2 flex gap-2 ${
                  activeTab === "second" ? "" : "hidden"
                } items-center`}
              >
                <div className="bg-[#D9D9D9] lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <p className="text-black">1</p>
                </div>
                <p className="text-left lg:font-normal sm:font-light">
                  বাসচাপায় প্রাণ গেল একই পরিবারের সাতজনের
                </p>
              </div>
              <div className="h-1 border-b-[1px] border-black mt-2"></div>
            </div>
            <div>
              <div
                id="first"
                className={`p-2 flex gap-2 ${
                  activeTab === "first" ? "" : "hidden"
                } items-center`}
              >
                <div className="bg-[#D9D9D9] lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <p className="text-black">1</p>
                </div>
                <p className="text-left lg:font-normal sm:font-light">
                  এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রীw
                </p>
              </div>
              <div
                id="second"
                className={`p-2 flex gap-2 ${
                  activeTab === "second" ? "" : "hidden"
                } items-center`}
              >
                <div className="bg-[#D9D9D9] lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <p className="text-black">1</p>
                </div>
                <p className="text-left lg:font-normal sm:font-light">
                  বাসচাপায় প্রাণ গেল একই পরিবারের সাতজনের
                </p>
              </div>
              <div className="h-1 border-b-[1px] border-black mt-2"></div>
            </div>
            <div>
              <div
                id="first"
                className={`p-2 flex gap-2 ${
                  activeTab === "first" ? "" : "hidden"
                } items-center`}
              >
                <div className="bg-[#D9D9D9] lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <p className="text-black">1</p>
                </div>
                <p className="text-left lg:font-normal sm:font-light">
                  এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রীw
                </p>
              </div>
              <div
                id="second"
                className={`p-2 flex gap-2 ${
                  activeTab === "second" ? "" : "hidden"
                } items-center`}
              >
                <div className="bg-[#D9D9D9] lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <p className="text-black">1</p>
                </div>
                <p className="text-left lg:font-normal sm:font-light">
                  বাসচাপায় প্রাণ গেল একই পরিবারের সাতজনের
                </p>
              </div>
              <div className="h-1 border-b-[1px] border-black mt-2"></div>
            </div>
          </div>
        </div>

        <div className="w-full h-8 bg-[#13AB50] rounded-md  text-center items-center justify-center mt-2">
          <button className="text-black py-1" type="button">
            সর্বশেষ বাংলা
          </button>
        </div>
      </div>

      {/*  image part */}
      <div className="w-full h-full my-4">
        <Image className="w-full h-full" src={add2} alt="image"></Image>
      </div>
    </div>
  );
};

export default RightPart;
