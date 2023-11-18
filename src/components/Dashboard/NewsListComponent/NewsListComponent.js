import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { GiSightDisabled } from "react-icons/gi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import newsimage from "../../../assets/national/image1.png";
const NewsListComponent = () => {
  return (
    <div>
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">NEWS LIST</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      News
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>

                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-36 h-20">
                          <Image
                            class="w-full h-full "
                            src={newsimage}
                            alt="news"
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            ১৫ নভেম্বর দেশব্যাপী বাম জোটের বিক্ষোভের ডাক
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        ১৫ নভেম্বর ২০২৩
                      </p>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative  py-1 font-semibold  flex gap-3 ">
                        <span
                          aria-hidden
                          class="absolute inset-0  opacity-50 rounded-full"
                        ></span>
                        <span class="relative font-bold text-3xl text-red-600">
                          <MdOutlineDeleteOutline />
                        </span>
                        <span class="relative font-bold text-3xl text-green-600">
                          <FaEdit />
                        </span>
                        <span class="relative font-bold text-3xl text-gray-600">
                          <GiSightDisabled />
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-36 h-20">
                          <Image
                            class="w-full h-full "
                            src={newsimage}
                            alt="news"
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            ১৫ নভেম্বর দেশব্যাপী বাম জোটের বিক্ষোভের ডাক
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        ১৫ নভেম্বর ২০২৩
                      </p>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative  py-1 font-semibold  flex gap-3 ">
                        <span
                          aria-hidden
                          class="absolute inset-0  opacity-50 rounded-full"
                        ></span>
                        <span class="relative font-bold text-3xl text-red-600">
                          <MdOutlineDeleteOutline />
                        </span>
                        <span class="relative font-bold text-3xl text-green-600">
                          <FaEdit />
                        </span>
                        <span class="relative font-bold text-3xl text-gray-600">
                          <GiSightDisabled />
                        </span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsListComponent;
