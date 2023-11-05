import Image from "next/image";
import feaure from "../../../assets/kitchen/feature1.png";
import feaure2 from "../../../assets/kitchen/feature2.png";
import sideimg1 from "../../../assets/kitchen/kitchen2.png";
import sideimg2 from "../../../assets/kitchen/kitchen3.png";

const Motamot_Component = () => {
  return (
    <div className=" mt-4 grid lg:grid-cols-3 gap-4 mb-20">
      <div className="lg:col-span-2 ">
        <button
          className="bg-[#066F30]  text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
          type="button"
        >
          মতামত
        </button>
        <div className="h-[2px] w-full border-b-[1px] border-black mb-12 "></div>

        {/*    new desin part */}
        <div className="lg:container lg:mx-auto grid lg:grid-cols-2 lg:gap-x-5  lg:my-6 grid-cols-none mb-4">
          <div className="mb-6">
            <div>
              <Image className="w-full" src={feaure} alt="img"></Image>
              {/* <h5 className="text-center lg:text-[8px] text-[12px]">
                  দুপুরে স্বাগতিক ভারতের বিপক্ষে মাঠে নামছে বাংলাদেশ। ছবি :
                  সংগৃহীত
                </h5> */}
            </div>
            <div className=" px-1">
              <h2 className="font-bold lg:text-[25px] text-[16px] mt-4">
                সেরা বড় ঘর ধারনা | বাড়ির নকশা
              </h2>

              <h3 className="mt-4 mb-2">২২ অক্টোবর ২০২৩</h3>
              <p className="font-medium lg:text-[20px] text-[14px] mb-4  font-noto-sans-bengali text-justify">
                একজন ইন্টেরিয়র ডিজাইনার কি করেন?অভ্যন্তরীণ ডিজাইনাররা স্থানের
                প্রয়োজনীয়তা নির্ধারণ করে এবং প্রয়োজনীয় এবং আলংকারিক আইটেম
                যেমন রং, আলো এবং উপকরণ নির্বাচন করে অভ্যন্তরীণ স্থানগুলিকে
                কার্যকরী, নিরাপদ এবং সুন্দর করে তোলে...।
              </p>
              <button
                type="button"
                className=" font-semibold mb-4 hover:text-[#be5959]"
              >
                বিস্তারিত...
              </button>
            </div>

            <div className="">
              <div className="grid grid-cols-5 gap-4 mt-0">
                <div className="col-span-2">
                  <Image
                    className="w-full mt-4"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                </div>
                <div className="col-span-3 items-start mt-4">
                  <h2 className="font-bold text-[20px]">
                    হোম ইন্টেরিয়র ডিজাইনের মৌলিক নীতি এবং উপাদান
                  </h2>
                  <p className="font-normal text-[16px]  font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*  mew div */}

              <div className="grid grid-cols-5 gap-4 gap-2 mt-0">
                <div className="col-span-2">
                  <Image
                    className="w-full mt-4"
                    src={sideimg2}
                    alt="image"
                  ></Image>
                </div>
                <div className="col-span-3 items-start mt-4">
                  <h2 className="font-bold text-[20px]">
                    ফিল্ম রিভিউ: ফ্রি সোলো— স্ট্রেঞ্জ হারবারস
                  </h2>
                  <p className="font-normal text-[16px]  font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* side data */}
          <div className="">
            <div>
              <Image className="w-full" src={feaure2} alt="img"></Image>
              {/* <h5 className="text-center lg:text-[8px] text-[12px]">
                  দুপুরে স্বাগতিক ভারতের বিপক্ষে মাঠে নামছে বাংলাদেশ। ছবি :
                  সংগৃহীত
                </h5> */}
            </div>
            <div className=" px-1">
              <h2 className="font-bold lg:text-[25px] text-[16px] mt-4">
                রেডিও বিজ্ঞাপন: ছোট ব্যবসা গাইড
              </h2>

              <h3 className="mt-4 mb-2">২২ অক্টোবর ২০২৩</h3>
              <p className="font-medium lg:text-[20px] text-[14px] mb-2  font-noto-sans-bengali text-justify">
                একজন ইন্টেরিয়র ডিজাইনার কি করেন?অভ্যন্তরীণ ডিজাইনাররা স্থানের
                প্রয়োজনীয়তা নির্ধারণ করে এবং প্রয়োজনীয় এবং আলংকারিক আইটেম
                যেমন রং, আলো এবং উপকরণ নির্বাচন করে অভ্যন্তরীণ স্থানগুলিকে
                কার্যকরী, নিরাপদ এবং সুন্দর করে তোলে...।
              </p>
              <button
                type="button"
                className=" font-semibold mb-4 hover:text-[#be5959]"
              >
                বিস্তারিত...
              </button>
            </div>

            <div className="mt-2">
              <div className="grid grid-cols-5 gap-4 mt-0">
                <div className="col-span-2">
                  <Image
                    className="w-full mt-4"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                </div>
                <div className="col-span-3 items-start mt-4">
                  <h2 className="font-bold text-[20px]">
                    হোম ইন্টেরিয়র ডিজাইনের মৌলিক নীতি
                  </h2>
                  <p className="font-normal text-[16px]  font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*  mew div */}

              <div className="grid grid-cols-5 gap-4 ">
                <div className="col-span-2">
                  <Image
                    className="w-full mt-4"
                    src={sideimg2}
                    alt="image"
                  ></Image>
                </div>
                <div className="col-span-3 items-start mt-4">
                  <h2 className="font-bold text-[20px]">
                    ফিল্ম রিভিউ: ফ্রি সোলো— স্ট্রেঞ্জ হারবারস
                  </h2>
                  <p className="font-normal text-[16px]  font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <button
          className="bg-[#000000] text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
          type="button"
        >
          ভিডিও এবং স্টোরি
        </button>
        <div className="h-[2px] lg:w-full w-full border-b-[1px] border-black mb-10 "></div>

        <div>
          <div>
            <p className="bg-[#066F30] text-center font-semibold text-white px-4">
              আর্কাইভ
            </p>
            <div class="flex items-center justify-center  px-4">
              <div class="max-w-sm w-full shadow-lg">
                <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
                  <div class="px-4 flex items-center justify-between">
                    <span
                      tabindex="0"
                      class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
                    >
                      October 2020
                    </span>
                    <div class="flex items-center">
                      <button
                        aria-label="calendar backward"
                        class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-chevron-left"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="15 6 9 12 15 18" />
                        </svg>
                      </button>
                      <button
                        aria-label="calendar forward"
                        class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler  icon-tabler-chevron-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-12 overflow-x-auto">
                    <table class="w-full">
                      <thead>
                        <tr>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                Mo
                              </p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                Tu
                              </p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                We
                              </p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                Th
                              </p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                Fr
                              </p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                Sa
                              </p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                Su
                              </p>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="pt-6">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                          </td>
                          <td class="pt-6">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                          </td>
                          <td class="pt-6">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                1
                              </p>
                            </div>
                          </td>
                          <td class="pt-6">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                2
                              </p>
                            </div>
                          </td>
                          <td class="pt-6">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100">
                                3
                              </p>
                            </div>
                          </td>
                          <td class="pt-6">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100">
                                4
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                5
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                6
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                7
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="w-full h-full">
                              <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                <a
                                  role="link"
                                  tabindex="0"
                                  class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                                >
                                  8
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                9
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100">
                                10
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100">
                                11
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                12
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                13
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                14
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                15
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                16
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100">
                                17
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100">
                                18
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                19
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                20
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                21
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                22
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                23
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100">
                                24
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100">
                                25
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                26
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                27
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                28
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                29
                              </p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                30
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 card desin */}
        </div>
      </div>
    </div>
  );
};

export default Motamot_Component;
