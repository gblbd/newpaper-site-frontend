import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import applicon1 from "../../../assets/header/app1.png";
import applicon2 from "../../../assets/header/app2.png";
import image from "../../../assets/header/c0280edd-f526-442f-a4fe-1a202d28b591 1.png";
import socialicon2 from "../../../assets/header/social2.png";
import socialicon3 from "../../../assets/header/social3.png";
import socialicon4 from "../../../assets/header/social4.png";
import socialicon5 from "../../../assets/header/social5.png";
const Navbar = () => {
  return (
    <div className="mt-20 text-center sm:mx-4 mx-4 lg:mx-0">
      <div className="relative">
        <div className="h-1  border-4 "></div>
        <Image
          src={image} // Replace with the URL or path to your image
          alt="Centered Image"
          className="lg:w-[250px] lg:h-30  absolute lg:top-1/2 lg:left-1/2 w-44 h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="max-w-7xl mx-auto ">
        <div className="flex sm:justify-between lg:mt-10 sm:mt-12 mt-6 flex-col sm:flex-row sm:items-end items-center">
          <div className="flex sm:gap-4 sm:b-4 sm:mt-4 mt-4 ">
            <Image
              className="lg:w-10 lg:h-10  w-4 h-4"
              src={socialicon2} // Replace with the URL or path to your image
              alt="Centered Image"
            />
            <Image
              className="lg:w-10 lg:h-10  mx-2 w-4 h-4"
              src={socialicon3} // Replace with the URL or path to your image
              alt="Centered Image"
            />
            <Image
              className="lg:w-10 lg:h-10  mx-2 w-4 h-4"
              src={socialicon4} // Replace with the URL or path to your image
              alt="Centered Image"
            />
            <Image
              className="lg:w-10 lg:h-10  mx-2 w-4 h-4"
              src={socialicon5} // Replace with the URL or path to your image
              alt="Centered Image"
            />
          </div>
          <div className="flex sm:justify-between sm:mt-4 mt-4">
            <div className="flex">
              <p className="text-black  text-center lg:py-2">DOWNLOAD APP</p>
            </div>
            <div className="flex">
              <Image
                className="lg:w-10 lg:h-10  mx-2 w-4 h-4"
                src={applicon1} // Replace with the URL or path to your image
                alt="Centered Image"
              />
              <Image
                className="lg:w-10 lg:h-10  mx-2 w-4 h-4"
                src={applicon2} // Replace with the URL or path to your image
                alt="Centered Image"
              />
            </div>
            <div className="hidden sm:block">
              <button
                className="bg-[#747775] text-white h-10 w-20 hover:bg-[#000000]"
                type="button"
              >
                English
              </button>
              <button
                className="bg-[#066F30] text-white hover:bg-[#010201] h-10  w-20"
                type="button"
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>

        {/* search and signin signup */}
        <div className="sm:flex sm:justify-between  mt-6 sm:mt-6">
          <div className="flex gap-4 mb-4">
            <span className=" lg:text-4xl text-2xl">
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
            <Link
              href="/signin"
              className="lg:px-10 lg:py-2 rounded-xl lg:ml-4 px-6 py-3 hover:bg-[#010201] hover:text-white"
            >
              সাইন ইন
            </Link>
            <button
              className="bg-[#066F30] text-white lg:px-10 lg:py-2 rounded-xl lg:ml-4 px-6 py-3 hover:bg-[#010201]"
              type="button"
            >
              সাবস্ক্রাইব
            </button>
          </div>
        </div>
      </div>

      {/*  navbar menu option desing */}
      <div className="border-2 border-l-0 border-r-0 border-b-0 py-6 mt-6 items-center">
        <div className="text-2xl font-bold font-noto-sans-bengali text-green-600 overflow-hidden">
          <div className="marquee">
            এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রী ** সংঘাত ও অনিশ্চয়তার **
            চার বড় সমাবেশে ভোটের বার্তা দেবে আওয়ামী লীগ মধ্যে রাজনীতি
          </div>
        </div>
      </div>

      <div className="border-2 border-l-0 border-r-0 py-6">
        <ul className="list-none lg:flex lg:gap-10 gap-2 justify-center grid ">
          <div className="flex items-start gap-2 lg:gap-12  sm:gap-4 font-bold ">
            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              সর্বশেষ{" "}
            </li>

            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              জাতীয়
            </li>
            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              আন্তর্জাতিক
            </li>
            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              রাজনীতি
            </li>
            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              সারাদেশ
            </li>
          </div>
          <div className="flex items-start gap-5 sm:gap-4 lg:gap-12 font-bold">
            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              বিনোদন
            </li>

            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              মতামত
            </li>
            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              ভিডিও
            </li>
            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              চাকরি
            </li>
            <li className="font-bold text-[20px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0">
              খেলা
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
