import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const NationalNewsPart = ({ dataByCategory }) => {
  const [isClient, setIsClient] = useState(false);
  const [mainNews, setMainNews] = useState("");
  const [sompadokNews, setSompadokNews] = useState("");
  const [sideNews, setSideNews] = useState("");

  useEffect(() => {
    setIsClient(true);
    if (dataByCategory) {
      let nationalNews = dataByCategory.find(
        (data) => data.categoreyName === "জাতীয়"
      );
      setMainNews(nationalNews.newsArray[0]);
      const side = nationalNews.newsArray.slice(1, 5);
      setSideNews(side);
      //sompadok news work
      let sompadokNewsData = dataByCategory.find((data) =>
        data.categoreyName === "সম্পাদকীয়" ? data : null
      );

      if (sompadokNewsData?.newsArray?.length === null) {
        return "";
      } else {
        setSompadokNews(sompadokNewsData?.newsArray[0]);
      }
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
              জাতীয়
            </button>
            <div className="h-1 w-full border-b-[1px] border-black mb-12 "></div>

            {/*    new desin part */}
            <div className="lg:container lg:mx-auto grid lg:grid-cols-2 lg:gap-x-5  lg:my-6 grid-cols-none">
              <div className="">
                <div>
                  <Image
                    className="w-full"
                    width={500}
                    height={500}
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
                </div>
                <Link
                  href={`/news-details/${mainNews?._id}`}
                  className=" font-semibold mb-4 mt-4 hover:text-[#be5959]"
                >
                  বিস্তারিত...
                </Link>
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
                          width={500}
                          height={500}
                          alt="image"
                        ></Image>
                      </div>
                      <div className=" col-span-3 items-start mt-4">
                        <Link href={`/news-details/${news?._id}`}>
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
                      <div className="h-1  border-b-[1px] border-black mt-4"></div>
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
              সম্পাদকীয়
            </button>
            <div className="h-1 lg:w-full w-full border-b-[1px] border-black mb-10 "></div>
            {sompadokNews !== undefined ? (
              <div>
                <h3> {formatBanglaDate(sompadokNews?.createdAt)}</h3>
                <Image
                  className="w-full h-[185px]"
                  width={500}
                  height={500}
                  src={sompadokNews?.newsImage}
                  alt=""
                ></Image>
                <h2 className="font-bold text-[20px]  mt-4 mb-4 font-noto-sans-bengali">
                  {sompadokNews?.newsTitle}
                </h2>

                <p
                  dangerouslySetInnerHTML={{
                    __html: sompadokNews?.newsDetailsText?.slice(0, 400),
                  }}
                  className="font-medium lg:text-[20px] text-[14px] mb-4  font-noto-sans-bengali text-justify"
                ></p>
                <Link
                  href={`/news-details/${sompadokNews?._id}`}
                  className=" font-semibold mb-4 mt-2 hover:text-[#be5959]"
                >
                  বিস্তারিত...
                </Link>
                {/* pool system desin */}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

export default NationalNewsPart;
