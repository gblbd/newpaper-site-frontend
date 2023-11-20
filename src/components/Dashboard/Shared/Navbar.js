import useAuth from "@/hooks/useAuth";
import { signout } from "@/utilities/helper";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { GrNotification } from "react-icons/gr";
import userimg from "../../../assets/dashboard/user.png";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, setUser, isLoading } = useAuth();

  const router = useRouter();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    // setIsLoading(true);
    signout(() => {
      setUser("");
      router.push("/signin");
    });
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
            <Image src={userimg} alt="image"></Image>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md p-2">
              {/* Dropdown content */}
              {user.email ? (
                <>
                  <div
                    key="logout"
                    className="cursor-pointer hover:bg-gray-100 p-2"
                  >
                    <button onClick={logout}>Logout</button>
                  </div>
                  <div
                    key="settings"
                    className="cursor-pointer hover:bg-gray-100 p-2"
                  >
                    Settings
                  </div>
                </>
              ) : (
                <div
                  key="login"
                  className="cursor-pointer hover:bg-gray-100 p-2"
                >
                  Login
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
