import Image from "next/image";
import Link from "next/link";
const BannerRecentNews = ({ data }) => {
  if (!data || data.length === 0) {
    return null; // Handle case when data is empty or not provided
  }

  const mainNews = data[0];
  const sideNews = data.slice(1, 4);
  return (
    <div className=" grid lg:grid-cols-2 lg:gap-x-32  lg:my-6 grid-cols-none">
      <div className="">
        <div>
          <Image
            className="w-full"
            width={0}
            height={0}
            src={mainNews.newsImage}
            alt="img"
          ></Image>
          <h5 className="text-center lg:text-[18px] text-[12px]">
            ভারতের বিপক্ষে মাঠে নামছে বাংলাদেশ। ছবি : সংগৃহীত
          </h5>
        </div>
        <div className=" px-1">
          <Link href="/news-details">
            <h2 className="font-bold lg:text-[30px] text-[16px] font-noto-sans-bengali">
              {mainNews.newsTitle}
            </h2>
          </Link>
          <p className="font-medium lg:text-[20px] text-[14px] mb-4 font-noto-sans-bengali text-justify">
            ২০২৩ ওয়ানডে বিশ্বকাপে প্রথম ম্যাচে আফগানিস্তানকে উড়িয়ে দারুণ শুরু
            পেয়েছিল বাংলাদেশ। কিন্তু পরের দুই ম্যাচে ইংল্যান্ড ও নিউজিল্যান্ডের
            কাছে ধরাশায়ী হয় টাইগাররা। টানা দুই পরাজয়ের পর ঘুরে দাঁড়ানোর লক্ষ্যে
            মাঠে নামতে যাচ্ছে হাথুরুসিংহের শিষ্যরা। টানা তিন জয় পাওয়া স্বাগতিক
            ভারতকে চ্যালেঞ্জ জানাতে প্রস্তুত টাইগার শিবির।
          </p>
        </div>
        <Link href="/news-details">
          <button type="button" className=" sm:m-4 m-4 hover:text-[#be5959]">
            বিস্তারিত...
          </button>
        </Link>
      </div>
      {/* side data */}
      <div className="">
        {sideNews.map((news, index) => (
          <div key={index}>
            <div className="flex gap-2 mt-0">
              <div>
                <Image
                  className="sm:w-[470px] sm:h-[174px] w-[900px] h-full"
                  src={news.newsImage}
                  width={0}
                  height={0}
                  alt="image"
                ></Image>
              </div>
              <div className="w-100  items-start">
                <Link href="/news-details">
                  <h2 className="font-bold text-[20px] mt-7">
                    এবার ইসরায়েল যাচ্ছেন ব্রিটিশ প্রধানমন্ত্রী
                  </h2>
                </Link>

                <p className="font-normal text-[16px]  font-noto-sans-bengali">
                  ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ ইসরায়েল
                  সফর করেছেন ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই
                  মিত্রদেশ ইসরায়েল সফর করেছেন...
                </p>
                <button
                  type="button"
                  className=" font-semibold mb-4 mt-4 hover:text-[#be5959]"
                >
                  বিস্তারিত...
                </button>
              </div>
            </div>
            {index === 2 ? (
              <div className=""></div>
            ) : (
              <div className="h-1 w-100 border-b-[1px] border-black mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerRecentNews;
