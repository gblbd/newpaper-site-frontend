import useContextData from "@/hooks/useContextData";
import { authenticate, isAuth } from "@/utilities/helper";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginimg from "../../assets/auth/57-2162-removebg-preview.png";
const index = () => {
  const [loginData, setLoginData] = useState({});
  const {
    user,
    setUser,
    isLoading,
    setIsLoading,
    setAuthError,
    authError,
    authSuccess,
    setAuthSuccess,
  } = useContextData();
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const router = useRouter();

  const showToastMessage = (err) => {
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handelLoginSubmit = (event) => {
    event.preventDefault();

    const { email, password } = loginData;
    //password validation by condition
    if (password === undefined || email === undefined) {
      showToastMessage("please fill the form");
      return;
    }
    if (password.length < 8) {
      showToastMessage("Password must be minimum 8 characters");
      return;
    }

    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/signin`,
      data: { email, password },
    })
      .then((response) => {
        //console.log("SIGNIN SUCCESS", response);
        authenticate(response.data, () => {
          setUser(isAuth());
          setIsLoading(false);
          router.push("/dashboard");
          //console.log("cookie local save ", isAuth());
        });
      })
      .catch((err) => {
        showToastMessage(err.response.data.error);
      });
  };

  return (
    <div>
      <ToastContainer />
      <div class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
              Lets Sign In!
            </h2>
            <div class="text-gray-700 mt-8">
              Don`t have account? please{" "}
              <Link href="signup" class="underline">
                {" "}
                Signup
              </Link>{" "}
              here
            </div>
          </div>
          <div class="text-center">
            <Image className="w-full" src={loginimg} alt="imageq"></Image>
          </div>
        </div>
        <div class="items-center justify-center">
          <form onSubmit={handelLoginSubmit}>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
                onChange={handelOnChange}
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Password
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                onChange={handelOnChange}
              />
            </div>

            <div class="mt-8">
              <button class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                SignIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
