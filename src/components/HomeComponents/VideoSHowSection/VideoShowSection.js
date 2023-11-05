import Image from "next/image";
import image1 from "../../../assets/saradesh/image1.png";
import image2 from "../../../assets/saradesh/image2.png";
import image3 from "../../../assets/saradesh/image3.png";
import image4 from "../../../assets/saradesh/image4.png";
import image5 from "../../../assets/saradesh/image5.png";
import image6 from "../../../assets/saradesh/image6.png";
const VideoShowSection = () => {
  return (
    <div className=" grid  gap-4">
      <div className=" ">
        <button
          className="bg-[#066F30]  text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-2px]"
          type="button"
        >
          ভিডিও
        </button>
        <div className="h-[2px] w-full border-b-[1px] border-black mb-10 "></div>

        {/*    new desin part */}
        <div className=" grid sm:grid-cols-3 sm:gap-3  sm:my-6 grid-cols-none">
          <div className="border rounded-xl shadow-md border-black">
            <div>
              <Image className="p-4" src={image1} alt="image"></Image>
            </div>
            <div className="mt-1 mb-2 px-4">
              <h2 className="font-noto-sans-bengali text-black font-medium">
                বাংলাদেশ ভ্রমণে নাগরিকদের সতর্ক করল ইসরায়েল
              </h2>
              <p className="font-noto-sans-bengali text-black font-light text-sm">
                ১৯ অক্টোবর ২০২৩
              </p>
            </div>
          </div>
          <div className="border rounded-xl shadow-md border-black">
            <div>
              <Image className="p-4" src={image2} alt="image"></Image>
            </div>
            <div className="mt-1 mb-2 px-4">
              <h2 className="font-noto-sans-bengali text-black font-medium">
                বাংলাদেশ ভ্রমণে নাগরিকদের সতর্ক করল ইসরায়েল
              </h2>
              <p className="font-noto-sans-bengali text-black font-light text-sm">
                ১৯ অক্টোবর ২০২৩
              </p>
            </div>
          </div>
          <div className="border rounded-xl shadow-md border-black">
            <div>
              <Image className="p-4" src={image3} alt="image"></Image>
            </div>
            <div className="mt-1 mb-2 px-4">
              <h2 className="font-noto-sans-bengali text-black font-medium">
                বাংলাদেশ ভ্রমণে নাগরিকদের সতর্ক করল ইসরায়েল
              </h2>
              <p className="font-noto-sans-bengali text-black font-light text-sm">
                ১৯ অক্টোবর ২০২৩
              </p>
            </div>
          </div>
          <div className="border rounded-xl shadow-md border-black">
            <div>
              <Image className="p-4" src={image4} alt="image"></Image>
            </div>
            <div className="mt-1 mb-2 px-4">
              <h2 className="font-noto-sans-bengali text-black font-medium">
                বাংলাদেশ ভ্রমণে নাগরিকদের সতর্ক করল ইসরায়েল
              </h2>
              <p className="font-noto-sans-bengali text-black font-light text-sm">
                ১৯ অক্টোবর ২০২৩
              </p>
            </div>
          </div>
          <div className="border rounded-xl shadow-md border-black">
            <div>
              <Image className="p-4" src={image5} alt="image"></Image>
            </div>
            <div className="mt-1 mb-2 px-4">
              <h2 className="font-noto-sans-bengali text-black font-medium">
                বাংলাদেশ ভ্রমণে নাগরিকদের সতর্ক করল ইসরায়েল
              </h2>
              <p className="font-noto-sans-bengali text-black font-light text-sm">
                ১৯ অক্টোবর ২০২৩
              </p>
            </div>
          </div>
          <div className="border rounded-xl shadow-md border-black">
            <div>
              <Image className="p-4" src={image6} alt="image"></Image>
            </div>
            <div className="mt-1 mb-2 px-4">
              <h2 className="font-noto-sans-bengali text-black font-medium">
                বাংলাদেশ ভ্রমণে নাগরিকদের সতর্ক করল ইসরায়েল
              </h2>
              <p className="font-noto-sans-bengali text-black font-light text-sm">
                ১৯ অক্টোবর ২০২৩
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div class="flex items-center justify-between   bg-white px-4 py-3 sm:px-6">
            <div class="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <nav
                  class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    href="#"
                    aria-current="page"
                    class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    3
                  </a>
                  <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                  </span>
                  <a
                    href="#"
                    class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Next</span>
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="font-normal text-black">17 এর 1 পৃষ্ঠা</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowSection;
