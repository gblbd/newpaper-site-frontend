import Image from "next/image";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import applicon1 from "../../../assets/header/app1.png";
import applicon2 from "../../../assets/header/app2.png";
import image from "../../../assets/header/c0280edd-f526-442f-a4fe-1a202d28b591 1.png";
import socialicon1 from "../../../assets/header/social1.png";
import socialicon2 from "../../../assets/header/social2.png";
import socialicon3 from "../../../assets/header/social3.png";
import socialicon4 from "../../../assets/header/social4.png";
import socialicon5 from "../../../assets/header/social5.png";
const Navbar = () => {
  return (
    <div className="mt-20 text-center">
      <div className="relative">
        <div className="h-1 w-100 border-4 bg-blue-500 "></div>
        <Image
          src={image} // Replace with the URL or path to your image
          alt="Centered Image"
          className="lg:w-30 lg:h-30  absolute lg:top-1/2 lg:left-1/2 w-20 h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex justify-around  lg:p-4 p-2">
          <Image
            className="lg:w-12 lg:h-10  mx-2 w-4 h-4"
            src={socialicon1} // Replace with the URL or path to your image
            alt="Centered Image"
          />
          <Image
            className="lg:w-12 lg:h-10  mx-2 w-4 h-4"
            src={socialicon2} // Replace with the URL or path to your image
            alt="Centered Image"
          />
          <Image
            className="lg:w-12 lg:h-10  mx-2 w-4 h-4"
            src={socialicon3} // Replace with the URL or path to your image
            alt="Centered Image"
          />
          <Image
            className="lg:w-12 lg:h-10  mx-2 w-4 h-4"
            src={socialicon4} // Replace with the URL or path to your image
            alt="Centered Image"
          />
          <Image
            className="lg:w-12 lg:h-10  mx-2 w-4 h-4"
            src={socialicon5} // Replace with the URL or path to your image
            alt="Centered Image"
          />
        </div>
        <div className="flex justify-around p-2 lg:p-4">
          <Image
            className="lg:w-12 lg:h-10  mx-2 w-4 h-4"
            src={applicon1} // Replace with the URL or path to your image
            alt="Centered Image"
          />
          <Image
            className="lg:w-12 lg:h-10  mx-2 w-4 h-4"
            src={applicon2} // Replace with the URL or path to your image
            alt="Centered Image"
          />
        </div>
      </div>

      {/* search and signin signup */}
      <div className="lg:flex lg:justify-around sm:flex sm:justify-around mt-4 sm:mt-6">
        <div className="flex gap-4 mb-4">
          <span className="lg:mx-4 lg:text-4xl text-2xl ml-2">
            <AiOutlineMenu />
          </span>
          <div className="relative">
            <input
              className="border-2 rounded-2xl lg:px-10 lg:text-2xl px-8 text-lg"
              type="text"
              placeholder="Search"
            ></input>
            <div className="absolute lg:left-4 lg:top-2 left-3 top-2 lg:text-xl text-md">
              <AiOutlineSearch />
            </div>
          </div>
        </div>
        <div className="">
          <button type="button" className="lg:mx-4 mx-11">
            সাইন ইন
          </button>
          <button
            className="bg-[#066F30] text-white lg:px-10 lg:py-2 rounded-xl lg:ml-4 px-6 py-3"
            type="button"
          >
            সাবস্ক্রাইব
          </button>
        </div>
      </div>

      {/*  navbar menu option desing */}
      <div className="border-2 border-l-0 border-r-0 border-b-0 py-6 mt-6 items-center">
        <div className="text-2xl font-bold font-noto-sans-bengali text-green-600 overflow-hidden">
          <div className="marquee">
            এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রী | সংঘাত ও অনিশ্চয়তার |
            চার বড় সমাবেশে ভোটের বার্তা দেবে আওয়ামী লীগ মধ্যে রাজনীতি
          </div>
        </div>
      </div>

      <div className="border-2 border-l-0 border-r-0 py-6  items-center">
        <ul class="list-none lg:flex lg:gap-10 gap-2 justify-center grid">
          <div className="flex items-center gap-4 lg:gap-10 sm:gap-4 ">
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              সর্বশেষ{" "}
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              জাতীয়
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              রাজনীতি
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              সারাদেশ
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              বিশ্ব
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              বিনোদন
            </li>
          </div>
          <div className="flex items-center gap-5 sm:gap-4 lg:gap-10">
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              খেলা
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              বাণিজ্য
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              চাকরি
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              মতামত
            </li>
            <li className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              ভিডিও
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
