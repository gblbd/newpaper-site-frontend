import Image from "next/image";
import Link from "next/link";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BiSolidUserPin } from "react-icons/bi";
import { FaClipboardList, FaFileUpload } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";
import { TbVideoPlus } from "react-icons/tb";
import dashlogo from "../../../assets/dashboard/dash-logo.png";
const Sidebar = () => {
  return (
    <div className="w-[250px]">
      <div className=" mt-32">
        <Image
          className="w-full  h-[70px]"
          src={dashlogo}
          alt="image logo"
        ></Image>
      </div>
      <div className="mt-6 flex flex-col justify-center  p-8">
        <div className="flex my-2  text-center items-center text-xl text-white uppercase font-medium">
          <span className="mr-2">
            <AiFillHome />
          </span>
          <Link href="/dashboard"> home</Link>
        </div>
        <div className="flex my-2 text-center items-center text-xl text-white uppercase font-medium">
          <span className="mr-2">
            <FaFileUpload />
          </span>
          <Link href="/dashboard/upload-news"> upload news</Link>
        </div>
        <div className="flex my-2 text-center items-center text-xl text-white uppercase font-medium">
          <span className="mr-2">
            <TbVideoPlus />
          </span>
          <Link href="/dashboard/upload-video-news"> upload Video</Link>
        </div>
        <div className="flex my-2 text-center items-center text-xl text-white uppercase font-medium">
          <span className="mr-2">
            <FaClipboardList />
          </span>
          <Link href="/dashboard/news-list"> News List</Link>
        </div>
        <div className="flex my-2 text-center items-center text-xl text-white uppercase font-medium">
          <span className="mr-2">
            <PiVideoFill />
          </span>
          <Link href="/dashboard/video-news-list"> Video List</Link>
        </div>

        <div className="flex my-2 text-center items-center text-xl text-white uppercase font-medium">
          <span className="mr-2">
            <BiSolidUserPin />
          </span>
          <Link href="#"> user</Link>
        </div>
        <div className="flex my-2 text-center items-center text-xl text-white uppercase font-medium">
          <span className="mr-2">
            <AiFillSetting />
          </span>
          <Link href="#"> Setting</Link>
        </div>
        <div className="flex my-2 text-center items-center text-xl text-white uppercase font-medium">
          <span className="mr-2">
            <RiAdminLine />
          </span>
          <Link href="#">Admin</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
