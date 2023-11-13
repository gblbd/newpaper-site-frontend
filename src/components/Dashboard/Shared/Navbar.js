import Image from "next/image";
import { GrNotification } from "react-icons/gr";
import user from "../../../assets/dashboard/user.png";
const Navbar = () => {
  return (
    <div className="bg-[#fdfdfd] shadow-md p-8">
      <div className="flex mx-auto items-center justify-end ">
        <div className="ml-4">
          <input
            className="mr-8 outline-none"
            type="text"
            placeholder="Search.."
          />
        </div>
        <div>
          <span className="text-2xl">
            <GrNotification />
          </span>
        </div>
        <div className="w-14 h-14 ml-4">
          <Image className="" src={user} alt="image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
