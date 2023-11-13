import Image from "next/image";
import { useState } from "react";
import { GrNotification } from "react-icons/gr";
import user from "../../../assets/dashboard/user.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#fdfdfd] shadow-md p-8">
      <div className="flex mx-auto items-center justify-end relative">
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
        <div className="relative">
          <div
            className="w-14 h-14 ml-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            <Image src={user} alt="image" />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md p-2">
              {/* Dropdown content */}
              <div className="cursor-pointer hover:bg-gray-100 p-2">login</div>
              <div className="cursor-pointer hover:bg-gray-100 p-2">logout</div>
              <div className="cursor-pointer hover:bg-gray-100 p-2">
                settings
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
