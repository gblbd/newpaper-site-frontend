import Image from "next/image";
import loginimg from "../../assets/auth/57-2162-removebg-preview.png";
const signup = () => {
  return (
    <div>
      <div class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
              Lets Sign Up!
            </h2>
            <div class="text-gray-700 mt-8">
              This is a signup form.please{" "}
              <span class="underline"> fill up</span> all
            </div>
          </div>
          <div class="text-center">
            <Image className="w-full" src={loginimg} alt="imageq"></Image>
          </div>
        </div>
        <div class="items-center justify-center">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">
              Password
            </span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="password"
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">
              Confirm Password
            </span>
            <input
              class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="password"
            />
          </div>

          <div class="mt-8">
            <button class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
