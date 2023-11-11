import Image from "next/image";
import Link from "next/link";
import banner from "../../../assets/banner/image2.png";
import sideimg1 from "../../../assets/national/image1.png";
import sideimg2 from "../../../assets/national/image2.png";
import sideimg3 from "../../../assets/national/image3.png";
import sideimg4 from "../../../assets/national/image4.png";
import user from "../../../assets/national/user2.png";
const NationalNewsPart = () => {
  return (
    <div className=" mt-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 ">
        <button
          className="bg-[#066F30] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
          type="button"
        >
          জাতীয়
        </button>
        <div className="h-1 w-full border-b-[1px] border-black mb-12 "></div>

        {/*    new desin part */}
        <div className="lg:container lg:mx-auto grid lg:grid-cols-2 lg:gap-x-5  lg:my-6 grid-cols-none">
          <div className="">
            <div>
              <Image className="w-full" src={banner} alt="img"></Image>
              {/* <h5 className="text-center lg:text-[8px] text-[12px]">
                দুপুরে স্বাগতিক ভারতের বিপক্ষে মাঠে নামছে বাংলাদেশ। ছবি :
                সংগৃহীত
              </h5> */}
            </div>
            <div className=" px-1">
              <Link href="/news-details">
                <h2 className="font-bold lg:text-[25px] text-[16px] mt-4">
                  2023 সালের সেরা সমসাময়িক ডিজাইন স্টাইল আইডিয়াস - ডেকোরিলা
                </h2>
              </Link>

              <h3 className="mt-4 mb-2">২২ অক্টোবর ২০২৩</h3>
              <p className="font-medium lg:text-[20px] text-[14px] mb-4  font-noto-sans-bengali text-justify">
                ২০২৩ ওয়ানডে বিশ্বকাপে প্রথম ম্যাচে আফগানিস্তানকে উড়িয়ে দারুণ
                শুরু পেয়েছিল বাংলাদেশ। কিন্তু পরের দুই ম্যাচে ইংল্যান্ড ও
                নিউজিল্যান্ডের কাছে ধরাশায়ী হয় টাইগাররা। টানা দুই পরাজয়ের পর
                ঘুরে দাঁড়ানোর লক্ষ্যে মাঠে নামতে যাচ্ছে হাথুরুসিংহের শিষ্যরা।
                টানা তিন জয় পাওয়া স্বাগতিক ভারতকে চ্যালেঞ্জ জানাতে প্রস্তুত
                টাইগার শিবির।
              </p>
            </div>
            <button
              type="button"
              className=" font-semibold mb-4 mt-4 hover:text-[#be5959]"
            >
              বিস্তারিত...
            </button>
          </div>
          {/* side data */}
          <div className="">
            <div className="grid grid-cols-5 gap-2 mt-0">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg1}
                  alt="image"
                ></Image>
              </div>
              <div className=" col-span-3 items-start mt-4">
                <Link href="/news-details">
                  <h2 className="font-bold text-[20px]">
                    ড্রয়িং রুম ইন্টেরিয়র ডিজাইন | ইন্টেরিয়র স্টুডিও এস...
                  </h2>
                </Link>
                <p className="font-normal text-[16px] font-noto-sans-bengali">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>
            <div className="h-1  border-b-[1px] border-black mt-4"></div>

            {/*  mew div */}
            <div className="grid grid-cols-5 gap-2 mt-0">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg2}
                  alt="image"
                ></Image>
              </div>
              <div className=" col-span-3 items-start mt-4">
                <Link href="/news-details">
                  <h2 className="font-bold text-[20px]">
                    ড্রয়িং রুম ইন্টেরিয়র ডিজাইন | ইন্টেরিয়র স্টুডিও এস...
                  </h2>
                </Link>

                <p className="font-normal text-[16px] font-noto-sans-bengali">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>
            <div className="h-1 w-100 border-b-[1px] border-black mt-4"></div>
            {/*  mew div */}

            <div className="grid grid-cols-5 gap-2 mt-0">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg3}
                  alt="image"
                ></Image>
              </div>
              <div className=" col-span-3 items-start mt-4">
                <Link href="/news-details">
                  <h2 className="font-bold text-[20px]">
                    ড্রয়িং রুম ইন্টেরিয়র ডিজাইন | ইন্টেরিয়র স্টুডিও এস...
                  </h2>
                </Link>
                <p className="font-normal text-[16px] font-noto-sans-bengali">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>
            <div className="h-1 w-100 border-b-[1px] border-black mt-4"></div>
            {/*    new div */}
            <div className="grid grid-cols-5 gap-2 mt-0">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg4}
                  alt="image"
                ></Image>
              </div>
              <div className=" col-span-3 items-start mt-4">
                <Link href="/news-details">
                  <h2 className="font-bold text-[20px]">
                    ড্রয়িং রুম ইন্টেরিয়র ডিজাইন | ইন্টেরিয়র স্টুডিও এস...
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
      <div className="lg:col-span-1">
        <button
          className="bg-[#000000] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
          type="button"
        >
          সম্পাদকীয়
        </button>
        <div className="h-1 lg:w-full w-full border-b-[1px] border-black mb-10 "></div>

        <div>
          <h3>১৭ অক্টোবর ২০২৩, ০৫:৩৪ পিএম</h3>
          <Image className="w-full h-[185px]" src={user} alt=""></Image>
          <h2 className="font-bold text-[20px]  mt-4 mb-4 font-noto-sans-bengali">
            পোশাকশ্রমিকদের মজুরি অচলাবস্থা কারও জন্যই মঙ্গলজনক নয়
          </h2>

          <p className="font-medium lg:text-[20px] text-[14px] mb-4  font-noto-sans-bengali text-justify">
            পোশাকশ্রমিকদের মজুরি বৃদ্ধি নিয়ে সৃষ্ট অচলাবস্থা নিরসনে মালিক ও
            শ্রমিক—কোনো পক্ষ থেকেই বিচক্ষণ উদ্যোগ দেখতে না পাওয়াটা রীতিমতো
            হতাশাজনক। বরং দুই পক্ষ চরম অবস্থান নেওয়ায় একদিকে যেমন সহিংসতা থামছে
            না, অন্যদিকে একের পর এক কারখানা বন্ধ রাখতে হচ্ছে। সহিংসতায় এ পর্যন্ত
            দুজন শ্রমিক নিহত হয়েছেন, যা অত্যন্ত বেদনাদায়ক। এ ছাড়া যানবাহন,
            বিভিন্ন স্থাপনায় অগ্নিসংযোগ ও ভাঙচুরের ঘটনা ঘটেছে। এ পরিস্থিতি কারও
            জন্যই কাম্য ছিল না। প্রথম আলোর খবর জানাচ্ছে, চলতি বছরের এপ্রিল মাসে
            পোশাকশ্রমিকদের মজুরি নির্ধারণে সরকার নিম্নতম মজুরি
          </p>
          <button
            type="button"
            className=" font-semibold mb-4 mt-2 hover:text-[#be5959]"
          >
            বিস্তারিত...
          </button>
          {/* pool system desin */}
        </div>
      </div>
    </div>
  );
};

export default NationalNewsPart;
