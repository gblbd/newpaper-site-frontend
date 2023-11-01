import Image from "next/image";
import feaure from "../../../assets/kitchen/feature1.png";
import feaure2 from "../../../assets/kitchen/feature2.png";
import sideimg1 from "../../../assets/kitchen/kitchen2.png";
import sideimg2 from "../../../assets/kitchen/kitchen3.png";
import user from "../../../assets/kitchen/kitchen4.png";

const PoliticsNews = () => {
  return (
    <div className="lg:container lg:mx-auto mt-4 grid lg:grid-cols-3 gap-4 mb-4">
      <div className="lg:col-span-2 ">
        <button
          className="bg-[#066F30]  text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
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
              <h2 className="font-bold lg:text-[25px] text-[16px] mt-4">
                2023 সালের সেরা সমসাময়িক ডিজাইন স্টাইল আইডিয়াস - ডেকোরিলা
              </h2>

              <h3 className="mt-4 mb-2">২২ অক্টোবর ২০২৩</h3>
              <p className="font-medium lg:text-[20px] text-[14px] mb-4 font-sans font-noto-sans-bengali text-justify">
                ২০২৩ ওয়ানডে বিশ্বকাপে প্রথম ম্যাচে আফগানিস্তানকে উড়িয়ে দারুণ
                শুরু পেয়েছিল বাংলাদেশ। কিন্তু পরের দুই ম্যাচে ইংল্যান্ড ও
                নিউজিল্যান্ডের কাছে ধরাশায়ী হয় টাইগাররা। টানা দুই পরাজয়ের পর
                ঘুরে দাঁড়ানোর লক্ষ্যে মাঠে নামতে যাচ্ছে হাথুরুসিংহের শিষ্যরা।
                টানা তিন জয় পাওয়া স্বাগতিক ভারতকে চ্যালেঞ্জ জানাতে প্রস্তুত
                টাইগার শিবির।
              </p>
            </div>

            <div className="">
              <div className="flex gap-2 mt-0">
                <div>
                  <Image
                    className="w-[325px] h-[106px] mt-4"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-100  items-start mt-4">
                  <h2 className="font-bold text-[20px]">
                    হোম ইন্টেরিয়র ডিজাইনের মৌলিক নীতি এবং উপাদান
                  </h2>
                  <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*  mew div */}
              <div className="flex gap-2 mt-0">
                <div>
                  <Image
                    className="w-[300px] h-[106px] mt-4"
                    src={sideimg2}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-100  items-start mt-4">
                  <h2 className="font-bold text-[20px]">
                    ফিল্ম রিভিউ: ফ্রি সোলো— স্ট্রেঞ্জ হারবারস
                  </h2>
                  <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
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
                2023 সালের সেরা সমসাময়িক ডিজাইন স্টাইল আইডিয়াস - ডেকোরিলা
              </h2>

              <h3 className="mt-4 mb-2">২২ অক্টোবর ২০২৩</h3>
              <p className="font-medium lg:text-[20px] text-[14px] mb-4 font-sans font-noto-sans-bengali text-justify">
                ২০২৩ ওয়ানডে বিশ্বকাপে প্রথম ম্যাচে আফগানিস্তানকে উড়িয়ে দারুণ
                শুরু পেয়েছিল বাংলাদেশ। কিন্তু পরের দুই ম্যাচে ইংল্যান্ড ও
                নিউজিল্যান্ডের কাছে ধরাশায়ী হয় টাইগাররা। টানা দুই পরাজয়ের পর
                ঘুরে দাঁড়ানোর লক্ষ্যে মাঠে নামতে যাচ্ছে হাথুরুসিংহের শিষ্যরা।
                টানা তিন জয় পাওয়া স্বাগতিক ভারতকে চ্যালেঞ্জ জানাতে প্রস্তুত
                টাইগার শিবির।
              </p>
            </div>

            <div className="">
              <div className="flex gap-2 mt-0">
                <div className="mt-4">
                  <Image
                    className="w-[325px] h-[106px]"
                    src={sideimg1}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-100  items-start mt-4">
                  <h2 className="font-bold text-[20px]">
                    বর্তমান ক্রিয়াকলাপগুলির সাথে কীভাবে ক্যালোরি পোড়ানো যায়
                  </h2>
                  <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                    ২২ অক্টোবর ২০২৩
                  </p>
                </div>
              </div>

              {/*  mew div */}
              <div className="flex gap-2 mt-0">
                <div className="mt-4">
                  <Image
                    className="w-[300px] h-[106px] mt-4"
                    src={sideimg2}
                    alt="image"
                  ></Image>
                </div>
                <div className="w-100  items-start mt-4">
                  <h2 className="font-bold text-[20px]">
                    অভ্যন্তরীণ নকশায় গাছপালা: কীভাবে আপনার বাড়িকে সমৃদ্ধ করবেন
                  </h2>
                  <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
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
        <div className="h-1 lg:w-full w-full border-b-[1px] border-black mb-12 "></div>

        <div>
          <h3>১৭ অক্টোবর ২০২৩, ০৫:৩৪ পিএম</h3>
          <Image className="w-full h-[385px]" src={user} alt=""></Image>

          {/* 2 card desin */}

          <div className=" mt-2">
            <button
              className="bg-[#000000] text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-1px]"
              type="button"
            >
              এটি আধুনিক করুন
            </button>
            <div className="h-1 lg:w-full w-full border-b-[1px] border-black mb-12 ">
              <div className=" grid sm:grid-cols-2">
                <div className=" gap-2 mt-6 mb-6 sm:w-full w-full">
                  <div className="relative max-sm:mx-auto">
                    <Image
                      className="lg:w-[250px] h-[110px]  w-full"
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
                  <div className="w-100  items-start mt-4">
                    <h2 className="font-bold text-[15px]">
                      ভবিষ্যতের শহুরে রান্নাঘর
                    </h2>
                    <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                      ২২ অক্টোবর ২০২৩
                    </p>
                  </div>
                </div>

                {/*  mew div */}
                <div className=" gap-2 mt-6 mb-6">
                  <div className="relative max-sm:mx-auto">
                    <Image
                      className="lg:w-[250px] h-[110px]  w-full"
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
                  <div className="w-100  items-start mt-4">
                    <h2 className="font-bold text-[15px] mb-4 font-sans font-noto-sans-bengali text-justify">
                      দাবার টেবিলের মেঝে এবং বড় গোলাকার সহ লাক্স হলওয়ে
                    </h2>
                    <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                      ২২ অক্টোবর ২০২৩
                    </p>
                  </div>
                </div>

                {/*  mew div */}

                <div className=" gap-2 mt-6 mb-6">
                  <div className="relative max-sm:mx-auto">
                    <Image
                      className="lg:w-[250px] h-[110px]  w-full"
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
                  <div className="w-100  items-start mt-4">
                    <h2 className="font-bold text-[15px] mb-4 font-sans font-noto-sans-bengali text-justify">
                      পুরুষরা এখানে $50.00 পূরণ করতে অগ্রসর হয়
                    </h2>
                    <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                      ২২ অক্টোবর ২০২৩
                    </p>
                  </div>
                </div>

                {/*    new div */}
                <div className=" gap-2 mt-6 mb-6">
                  <div className="relative max-sm:mx-auto">
                    <Image
                      className="lg:w-[250px] h-[110px]  w-full"
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
                  <div className="w-100  items-start mt-4">
                    <h2 className="font-bold text-[15px] mb-4 font-sans font-noto-sans-bengali text-justify">
                      মেট্রো টাইলস ডিজাইন সহ সুন্দর বাথরুম
                    </h2>
                    <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
                      ২২ অক্টোবর ২০২৩
                    </p>
                  </div>
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
