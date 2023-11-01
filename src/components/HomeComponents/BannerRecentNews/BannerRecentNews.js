import Image from "next/image";
import banner from "../../../assets/banner/image2.png";
import sideimg1 from "../../../assets/banner/side1.png";
import sideimg2 from "../../../assets/banner/side2.png";
import sideimg3 from "../../../assets/banner/side3.png";
const BannerRecentNews = () => {
  return (
    <div class="lg:container lg:mx-auto grid lg:grid-cols-2 lg:gap-x-32  lg:my-6 grid-cols-none">
      <div className="">
        <div>
          <Image className="w-full" src={banner} alt="img"></Image>
          <h5 className="text-center lg:text-[22px] text-[12px]">
            দুপুরে স্বাগতিক ভারতের বিপক্ষে মাঠে নামছে বাংলাদেশ। ছবি : সংগৃহীত
          </h5>
        </div>
        <div className="text-justify px-1">
          <h2 className="font-bold lg:text-[40px] text-[16px]">
            বাঁচা-মরার লড়াইয়ে ভারতের মুখোমুখি বাংলাদেশ
          </h2>
          <p className="font-medium lg:text-[20px] text-[14px] mb-4 font-sans font-noto-sans-bengali">
            ২০২৩ ওয়ানডে বিশ্বকাপে প্রথম ম্যাচে আফগানিস্তানকে উড়িয়ে দারুণ শুরু
            পেয়েছিল বাংলাদেশ। কিন্তু পরের দুই ম্যাচে ইংল্যান্ড ও নিউজিল্যান্ডের
            কাছে ধরাশায়ী হয় টাইগাররা। টানা দুই পরাজয়ের পর ঘুরে দাঁড়ানোর লক্ষ্যে
            মাঠে নামতে যাচ্ছে হাথুরুসিংহের শিষ্যরা। টানা তিন জয় পাওয়া স্বাগতিক
            ভারতকে চ্যালেঞ্জ জানাতে প্রস্তুত টাইগার শিবির।
          </p>
        </div>
      </div>
      {/* side data */}
      <div className="">
        <div className="flex gap-2 mt-0">
          <div>
            <Image
              className="w-[300px] h-[184px]"
              src={sideimg1}
              alt="image"
            ></Image>
          </div>
          <div className="w-100  items-start">
            <h2 className="font-bold text-[20px] mt-7">
              এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রী
            </h2>
            <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
              ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ ইসরায়েল সফর
              করেছেন ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ
              ইসরায়েল সফর করেছেন...
            </p>
          </div>
        </div>
        <div className="h-1 w-100 border-b-[1px] border-black mt-4"></div>

        {/*  mew div */}
        <div className="flex gap-2 mt-3">
          <div>
            <Image
              className="w-[300px] h-[184px]"
              src={sideimg3}
              alt="image"
            ></Image>
          </div>
          <div className="w-100 items-center">
            <h2 className="font-bold text-[20px] mt-7">
              এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রী
            </h2>
            <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
              ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ ইসরায়েল সফর
              করেছেন ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ
              ইসরায়েল সফর করেছেন...
            </p>
          </div>
        </div>
        <div className="h-1 w-100 border-b-[1px] border-black mt-4"></div>
        {/*  mew div */}

        <div className="flex gap-2 mt-3">
          <div>
            <Image
              className="w-[300px] h-[184px]"
              src={sideimg2}
              alt="image"
            ></Image>
          </div>
          <div className="w-100 items-center">
            <h2 className="font-bold text-[20px] mt-7">
              এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রী
            </h2>
            <p className="font-normal text-[16px] font-sans font-noto-sans-bengali">
              ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ ইসরায়েল সফর
              করেছেন ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ
              ইসরায়েল সফর করেছেন...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerRecentNews;
