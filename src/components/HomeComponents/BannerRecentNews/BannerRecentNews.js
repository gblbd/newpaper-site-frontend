import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const BannerRecentNews = ({ data }) => {
  const [isClient, setIsClient] = useState(false);
  const [mainNews, setMainNews] = useState("");

  const [sideNews, setSideNews] = useState("");
  useEffect(() => {
    const mainNewsx = data[0];
    setMainNews(mainNewsx);
    const sideNews = data.slice(1, 4);
    setSideNews(sideNews);
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div className=" grid lg:grid-cols-2 lg:gap-x-32  lg:my-6 grid-cols-none">
          <div className="">
            <div>
              <Image
                className="w-full h-full"
                width={500}
                height={500}
                src={mainNews.newsImage}
                alt="img"
              ></Image>
              <h5 className="text-center lg:text-[18px] text-[12px]">
                {mainNews.newsTitle} ছবি : সংগৃহীত
              </h5>
            </div>
            <div className=" px-1">
              <Link href={`/news-details/${mainNews?._id}`}>
                <h2 className="font-bold lg:text-[30px] text-[16px] font-noto-sans-bengali mt-6 mb-4">
                  {mainNews.newsTitle}
                </h2>
              </Link>
              <p
                dangerouslySetInnerHTML={{
                  __html: mainNews?.newsDetailsText.slice(0, 200),
                }}
                className="font-medium lg:text-[20px] text-[14px] mb-4 font-noto-sans-bengali text-justify"
              />
            </div>
            <Link href={`/news-details/${mainNews?._id}`}>
              <button
                type="button"
                className=" sm:m-4 m-4 hover:text-[#be5959]"
              >
                বিস্তারিত..
              </button>
            </Link>
          </div>
          {/* side data */}
          <div className="">
            {sideNews.map((news, index) => (
              <div key={index} className="h-48 mb-4">
                <div className="grid grid-cols-5 gap-2 mt-0 h-full overflow-hidden">
                  <div className="col-span-2  ">
                    <Image
                      className="h-full"
                      src={news.newsImage}
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                  <div className="col-span-3  items-start">
                    <Link href={`/news-details/${news?._id}`}>
                      <h2 className="font-bold text-[20px] mt-7">
                        {news.newsTitle}
                      </h2>
                    </Link>

                    <p
                      className="font-normal text-[16px]  font-noto-sans-bengali"
                      dangerouslySetInnerHTML={{
                        __html: news?.newsDetailsText.slice(0, 100),
                      }}
                    ></p>
                    <Link
                      type="button"
                      href={`/news-details/${news?._id}`}
                      className=" font-semibold mb-4 mt-4 hover:text-[#be5959]"
                    >
                      বিস্তারিত...
                    </Link>
                  </div>
                </div>
                {index === 2 ? (
                  <div className=""></div>
                ) : (
                  <div className="h-1 w-100 border-b-[1px] border-black "></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        "hello"
      )}
    </>
  );
};

export default BannerRecentNews;
