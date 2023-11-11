import Image from "next/image";
import Link from "next/link";
import feaure from "../../../assets/kitchen/feature1.png";
import feaure2 from "../../../assets/kitchen/feature2.png";
import sideimg1 from "../../../assets/kitchen/kitchen2.png";
import sideimg2 from "../../../assets/kitchen/kitchen3.png";
import user from "../../../assets/national/story.png";

const PoliticsNews = () => {
  return (
    <div className=" mt-4 grid lg:grid-cols-3 gap-4 mb-20">
      <div className="lg:col-span-2 ">
        <button
          className="bg-[#066F30] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
          type="button"
        >
          রাজনীতি
        </button>
        <div className="h-1 w-full border-b-[1px] border-black mb-12 "></div>

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
              <Link href="/news-details">
                <h2 className="font-bold lg:text-[25px] text-[16px] mt-4">
                  সেরা বড় ঘর ধারনা | বাড়ির নকশা
                </h2>
              </Link>

              <h3 className="mt-4 mb-2">২২ অক্টোবর ২০২৩</h3>
              <p className="font-medium lg:text-[20px] text-[14px] mb-4  font-noto-sans-bengali text-justify">
                একজন ইন্টেরিয়র ডিজাইনার কি করেন?অভ্যন্তরীণ ডিজাইনাররা স্থানের
                প্রয়োজনীয়তা নির্ধারণ করে এবং প্রয়োজনীয় এবং আলংকারিক আইটেম
                যেমন রং, আলো এবং উপকরণ নির্বাচন করে অভ্যন্তরীণ স্থানগুলিকে
                কার্যকরী, নিরাপদ এবং সুন্দর করে তোলে...।
              </p>
              <button
                type="button"
                className=" font-semibold mb-4 mt-4 hover:text-[#be5959]"
              >
                বিস্তারিত...
              </button>
            </div>

            <div className="">
              <div className="grid grid-cols-7 gap-4 mt-0">
                <div className="col-span-3">
                  <Image
                    className="w-full mt-4"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                </div>
                <div className="col-span-4 items-start mt-4">
                  <Link href="/news-details">
                    <h2 className="font-bold text-[20px]">
                      হোম ইন্টেরিয়র ডিজাইনের মৌলিক নীতি এবং উপাদান
                    </h2>
                  </Link>
                  <p className="font-normal text-[16px]  font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*  mew div */}

              <div className="grid grid-cols-7 gap-4 mt-0">
                <div className="col-span-3">
                  <Image
                    className="w-full mt-4"
                    src={sideimg2}
                    alt="image"
                  ></Image>
                </div>
                <div className="col-span-4 items-start mt-4">
                  <Link href="/news-details">
                    <h2 className="font-bold text-[20px]">
                      ফিল্ম রিভিউ: ফ্রি সোলো— স্ট্রেঞ্জ হারবারস
                    </h2>
                  </Link>

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
              <Link href="/news-details">
                <h2 className="font-bold lg:text-[25px] text-[16px] mt-4">
                  রেডিও বিজ্ঞাপন: ছোট ব্যবসা গাইড
                </h2>
              </Link>
              <h3 className="mt-4 mb-2">২২ অক্টোবর ২০২৩</h3>
              <p className="font-medium lg:text-[20px] text-[14px] mb-4  font-noto-sans-bengali text-justify">
                একজন ইন্টেরিয়র ডিজাইনার কি করেন?অভ্যন্তরীণ ডিজাইনাররা স্থানের
                প্রয়োজনীয়তা নির্ধারণ করে এবং প্রয়োজনীয় এবং আলংকারিক আইটেম
                যেমন রং, আলো এবং উপকরণ নির্বাচন করে অভ্যন্তরীণ স্থানগুলিকে
                কার্যকরী, নিরাপদ এবং সুন্দর করে তোলে...।
              </p>
              <button
                type="button"
                className=" font-semibold mb-4 mt-4 hover:text-[#be5959]"
              >
                বিস্তারিত...
              </button>
            </div>

            <div className="">
              <div className="grid grid-cols-7 gap-4 mt-0">
                <div className="col-span-3">
                  <Image
                    className="w-full mt-4"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                </div>
                <div className="col-span-4 items-start mt-4">
                  <Link href="/news-details">
                    <h2 className="font-bold text-[20px]">
                      হোম ইন্টেরিয়র ডিজাইনের মৌলিক নীতি এবং উপাদান
                    </h2>
                  </Link>
                  <p className="font-normal text-[16px]  font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*  mew div */}

              <div className="grid grid-cols-7 gap-4 mt-0">
                <div className="col-span-3">
                  <Image
                    className="w-full mt-4"
                    src={sideimg2}
                    alt="image"
                  ></Image>
                </div>
                <div className="col-span-4 items-start mt-4">
                  <Link href="/news-details">
                    <h2 className="font-bold text-[20px]">
                      হোম ইন্টেরিয়র ডিজাইনের মৌলিক নীতি এবং উপাদান
                    </h2>
                  </Link>
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
          className="bg-[#000000] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
          type="button"
        >
          ভিডিও এবং স্টোরি
        </button>
        <div className="h-1 lg:w-full w-full border-b-[1px] border-black mb-10 "></div>

        <div>
          <h3>১৭ অক্টোবর ২০২৩, ০৫:৩৪ পিএম</h3>
          <Image className="w-full " src={user} alt=""></Image>

          {/* 2 card desin */}

          <div className=" mt-2">
            <button
              className="bg-[#000000] text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-1px]"
              type="button"
            >
              এটি আধুনিক করুন
            </button>
            <div className="h-1 lg:w-full w-full border-b-[1px] border-black mb-12 "></div>
            <div className=" grid sm:grid-cols-2 gap-2">
              <div className=" gap-2 mt-6 mb-6 sm:w-full w-full">
                <div className="relative max-sm:mx-auto">
                  <Image
                    className="  w-full"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                  <button
                    className="bg-[#000000] text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-[-40px] px-10 py-2 mb-[-1px] absolute"
                    type="button"
                  >
                    এটি আধুনিক করুন
                  </button>
                </div>
                <div className="flex flex-col  items-start mt-8">
                  <Link href="#">
                    <h2 className="font-bold text-[15px]">
                      ভবিষ্যতের শহুরে রান্নাঘর
                    </h2>
                  </Link>

                  <p className="font-normal text-[16px] font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*  mew div */}
              <div className=" gap-2 mt-6 mb-6">
                <div className="relative max-sm:mx-auto ">
                  <Image className=" w-full" src={sideimg1} alt="image"></Image>
                  <button
                    className="bg-[#000000] text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-[-40px] px-10 py-2 mb-[-1px] absolute"
                    type="button"
                  >
                    এটি আধুনিক করুন
                  </button>
                </div>
                <div className="flex flex-col  items-start mt-8">
                  <Link href="#">
                    <h2 className="font-bold text-[15px] mb-4  font-noto-sans-bengali text-justify">
                      দাবার টেবিলের মেঝে এবং বড় গোলাকার সহ লাক্স হলওয়ে
                    </h2>
                  </Link>

                  <p className="font-normal text-[16px] font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*  mew div */}

              <div className=" gap-2 ">
                <div className="relative max-sm:mx-auto ">
                  <Image
                    className="lg:w-[250px]   w-full"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                  <button
                    className="bg-[#000000] text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-[-40px] px-10 py-2 mb-[-1px] absolute"
                    type="button"
                  >
                    এটি আধুনিক করুন
                  </button>
                </div>
                <div className="flex flex-col items-start mt-8">
                  <Link href="#">
                    <h2 className="font-bold text-[15px] mb-4  font-noto-sans-bengali text-justify">
                      পুরুষরা এখানে $50.00 পূরণ করতে অগ্রসর হয়
                    </h2>
                  </Link>

                  <p className="font-normal text-[16px] font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*    new div */}
              <div className=" gap-2  ">
                <div className="relative max-sm:mx-auto ">
                  <Image
                    className="lg:w-[250px]  w-full"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                  <button
                    className="bg-[#000000] text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-[-40px] px-10 py-2 mb-[-1px] absolute"
                    type="button"
                  >
                    এটি আধুনিক করুন
                  </button>
                </div>
                <div className="flex flex-col mt-8 ">
                  <Link href="#">
                    <h2 className="font-bold text-[15px] mb-4 font-noto-sans-bengali text-justify">
                      মেট্রো টাইলস ডিজাইন সহ সুন্দর বাথরুম
                    </h2>
                  </Link>

                  <p className="font-normal text-[16px] font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticsNews;
