import Image from "next/image";
import newspaper from "../../../assets/national/newspaper1.png";
import user from "../../../assets/national/user.png";
import banner from "../../../assets/world/banner.png";
import image1 from "../../../assets/world/image1.png";
import image2 from "../../../assets/world/image2.png";
import image3 from "../../../assets/world/image3.png";
import image4 from "../../../assets/world/image4.png";
const WorldComponent = () => {
  return (
    <div className=" mt-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 ">
        <button
          className="bg-[#066F30]  text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
          type="button"
        >
          বিশ্ব
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
              <h2 className="font-bold lg:text-[25px] text-[16px] mt-4">
                2023 সালের সেরা সমসাময়িক ডিজাইন স্টাইল আইডিয়াস - ডেকোরিলা
              </h2>

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
          </div>
          {/* side data */}
          <div className="">
            <div className="flex gap-2 mt-0">
              <div>
                <Image
                  className="w-[325px] h-[106px]"
                  src={image1}
                  alt="image"
                ></Image>
              </div>
              <div className="w-100  items-start mt-4">
                <h2 className="font-bold text-[20px]">
                  ড্রয়িং রুম ইন্টেরিয়র ডিজাইন | ইন্টেরিয়র স্টুডিও এস...
                </h2>
                <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>
            <div className="h-1 w-100 border-b-[1px] border-black mt-4"></div>

            {/*  mew div */}
            <div className="flex gap-2 mt-0">
              <div>
                <Image
                  className="w-[300px] h-[106px]"
                  src={image2}
                  alt="image"
                ></Image>
              </div>
              <div className="w-100  items-start mt-4">
                <h2 className="font-bold text-[20px]">
                  বাড়ির ইন্টেরিয়র ডিজাইন | ইন্টেরিয়র ডিজাইন |
                </h2>
                <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>
            <div className="h-1 w-100 border-b-[1px] border-black mt-4"></div>
            {/*  mew div */}

            <div className="flex gap-2 mt-0">
              <div>
                <Image
                  className="w-[355px] h-[106px]"
                  src={image3}
                  alt="image"
                ></Image>
              </div>
              <div className="w-100  items-start mt-4">
                <h2 className="font-bold text-[20px]">
                  লোয়েব/ব্রেন বিজয়ী দম্পতির জন্য তৃতীয় গাড়ি পুনরুজ্জীবিত |
                </h2>
                <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>
            <div className="h-1 w-100 border-b-[1px] border-black mt-4"></div>
            {/*    new div */}
            <div className="flex gap-2 mt-0">
              <div>
                <Image
                  className="w-[355px] h-[106px]"
                  src={image4}
                  alt="image"
                ></Image>
              </div>
              <div className="w-100  items-start mt-4">
                <h2 className="font-bold text-[20px]">
                  রান্নাঘরের অভ্যন্তরীণ নকশা: রান্নাঘর পুনর্নির্মাণের চূড়ান্ত
                  গাইড
                </h2>
                <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                  ২২ অক্টোবর ২০২৩
                </p>
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
          অনলাইন জরিপ
        </button>
        <div className="h-1 lg:w-full w-full border-b-[1px] border-black mb-12 "></div>

        <div>
          <h3>১৭ অক্টোবর ২০২৩, ০৫:৩৪ পিএম</h3>
          <Image className="w-full h-[185px]" src={user} alt=""></Image>
          <p className="font-bold text-[16px] font-sans font-noto-sans-bengali mt-2 mb-4">
            বাংলাদেশ ব্যাংকের সাবেক গভর্নর আতিউর রহমান বলেছেন, মূল্যস্ফীতির
            কারণে মানুষ বিপর্যস্ত আপনি কি তার সঙ্গে একমত?
          </p>

          {/* pool system desin */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-6 h-6 p-1 mr-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-indigo-600"
                  name="poll_option"
                  value="option1"
                />
              </div>
              <div className="flex-grow w-full border-solid border-2 pl-6 py-1 border-[#0000004D] rounded mb-2">
                Option 1
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-6 h-6 p-1 mr-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-indigo-600"
                  name="poll_option"
                  value="option2"
                />
              </div>
              <div className="flex-grow w-full border-solid border-2 pl-6 py-1 border-[#0000004D] rounded">
                Option 2
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-6 h-6 p-1 mr-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-indigo-600"
                  name="poll_option"
                  value="option3"
                />
              </div>
              <div className="flex-grow w-full border-solid border-2 pl-6 py-1 border-[#0000004D] rounded mb-2">
                Option 3
              </div>
            </div>
          </div>

          <Image
            className="w-full mt-2 h-[185px]"
            src={newspaper}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default WorldComponent;
