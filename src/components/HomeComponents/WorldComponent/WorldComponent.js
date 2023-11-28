import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import newspaper from "../../../assets/national/newspaper1.png";
import user from "../../../assets/national/user.png";
const WorldComponent = ({ dataByCategory }) => {
  const [isClient, setIsClient] = useState(false);
  const [mainNews, setMainNews] = useState("");

  const [sideNews, setSideNews] = useState("");

  useEffect(() => {
    setIsClient(true);
    if (dataByCategory) {
      let dataNews = dataByCategory.find(
        (data) => data.categoreyName === "আন্তর্জাতিক"
      );
      setMainNews(dataNews.newsArray[0]);
      const side = dataNews.newsArray.slice(1, 5);
      setSideNews(side);
    }
  }, []);

  function formatBanglaDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const dateObject = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("bn-BD", options).format(
      dateObject
    );

    return formattedDate;
  }

  return (
    <>
      {isClient ? (
        <div className=" mt-4 grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 ">
            <button
              className="bg-[#066F30] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
              type="button"
            >
              আন্তর্জাতিক
            </button>
            <div className="h-[2px] w-full border-b-[1px] border-black mb-12 "></div>

            {/*    new desin part */}
            <div className="lg:container lg:mx-auto grid lg:grid-cols-2 lg:gap-x-5  lg:my-6 grid-cols-none">
              <div className="">
                <div>
                  <Image
                    className="w-full"
                    width={0}
                    height={0}
                    src={mainNews?.newsImage}
                    alt="img"
                  ></Image>
                  {/* <h5 className="text-center lg:text-[8px] text-[12px]">
                দুপুরে স্বাগতিক ভারতের বিপক্ষে মাঠে নামছে বাংলাদেশ। ছবি :
                সংগৃহীত
              </h5> */}
                </div>
                <div className=" px-1">
                  <Link href={`/news-details/${mainNews?._id}`}>
                    <h2 className="font-bold lg:text-[25px] text-[16px] mt-4">
                      {mainNews?.newsTitle}
                    </h2>
                  </Link>

                  <h3 className="mt-4 mb-2">
                    {" "}
                    {formatBanglaDate(mainNews?.createdAt)}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: mainNews?.newsDetailsText?.slice(0, 400),
                    }}
                    className="font-medium lg:text-[20px] text-[14px] mb-4  font-noto-sans-bengali text-justify"
                  ></p>
                  <Link
                    href={`/news-details/${mainNews?._id}`}
                    className=" font-semibold mb-4 mt-4 hover:text-[#be5959]"
                  >
                    বিস্তারিত...
                  </Link>
                </div>
              </div>
              {/* side data */}

              <div className="">
                {sideNews.map((news, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-5 gap-2 mt-0">
                      <div className="col-span-2">
                        <Image
                          className="w-full h-full"
                          src={news.newsImage}
                          width={0}
                          height={0}
                          alt="image"
                        ></Image>
                      </div>
                      <div className=" col-span-3 items-start mt-4">
                        <Link href="/news-details">
                          <h2 className="font-bold text-[20px]">
                            {news.newsTitle}
                          </h2>
                        </Link>

                        <p className="font-normal text-[16px] font-noto-sans-bengali">
                          {formatBanglaDate(news?.createdAt)}
                        </p>
                      </div>
                    </div>
                    {index === 3 ? (
                      <div className="border-none"></div>
                    ) : (
                      <div className="h-1 w-100 border-b-[1px] border-black mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <button
              className="bg-[#000000] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
              type="button"
            >
              অনলাইন জরিপ
            </button>
            <div className="h-[2px] lg:w-full w-full border-b-[1px] border-black mb-10 "></div>

            <div>
              <h3>১৭ অক্টোবর ২০২৩, ০৫:৩৪ পিএম</h3>
              <Image className="w-full h-[185px]" src={user} alt=""></Image>
              <p className="font-bold text-[16px]  font-noto-sans-bengali mt-2 mb-4">
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
      ) : (
        "loading"
      )}
    </>
  );
};

export default WorldComponent;
