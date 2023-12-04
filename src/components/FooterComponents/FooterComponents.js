import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../assets/footer/footerlogo.png";
import sideimg1 from "../../assets/footer/image1.png";
import sideimg2 from "../../assets/footer/image2.png";
import sideimg3 from "../../assets/footer/image3.png";
const FooterComponents = () => {
  const [newsList, setNewsList] = useState([]);

  //fetch data from db
  const [pageCount, setPageCount] = useState(0);
  //page button er jonnno
  const [page, setPage] = useState(0);

  //load data
  let size = 3;
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/news-video-data-list?page=${page}&&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNewsList(data.finalResult);
        //setDisplayProducts(data.finalResult);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

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
    <div className="mt-10 max-w-7xl mx-auto">
      <div className="bg-footer-texture sm:w-full bg-cover bg-no-repeat">
        <div className="sm:container sm:mx-auto grid sm:grid-cols-3 sm:gap-8 ">
          <div className=" mt-12 lg:ml-8 ml-2">
            <h2 className="text-[26px] font-noto-sans-bengali text-white">
              {" "}
              সারাদেশ
            </h2>

            <div className="grid grid-cols-5 gap-4 mx-auto mt-4 ">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg1}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <Link href="#">
                  <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                    মাধ্যমিক স্কুলে ভর্তির আবেদন শুরু ২৪ অক্টোবর
                  </h2>
                </Link>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*  mew div */}
            <div className="grid grid-cols-5 gap-4 mx-auto mt-4 ">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg2}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <Link href="#">
                  <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                    জানা গেল ঘূর্ণিঝড় ‘তেজ’ কবে আঘাত হানবে
                  </h2>
                </Link>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*  mew div */}

            <div className="grid grid-cols-5 gap-4 mx-auto mt-4">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg3}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <Link href="#">
                  <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                    সাত কলেজে ভর্তির চূড়ান্ত তালিকা প্রকাশ
                  </h2>
                </Link>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*    new div */}
            {/* logo iv */}
          </div>

          <div className=" mt-12 ml-2">
            <h2 className="text-[26px] font-noto-sans-bengali  text-white">
              {" "}
              ভিডিও
            </h2>

            {newsList.map((data) => (
              <div
                key={data._id}
                className="grid grid-cols-5 gap-4 mx-auto mt-4 "
              >
                <div className="col-span-2">
                  <div className="">
                    <iframe
                      className="w-full h-full"
                      src={data.newsVideoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-span-3 mt-2">
                  <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                    {data.newsVideoTitle}
                  </h2>
                  <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                    {data?.createdAt && formatBanglaDate(data.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" mt-12">
            <h2 className="text-[26px] font-noto-sans-bengali  text-white text-center">
              জনপ্রিয় বিভাগ
            </h2>
            <div className="flex gap-4 mt-4 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold text-white">
                জাতীয়
              </h2>
              <p className=" text-[16px] font-noto-sans-bengali  text-white">
                ২২
              </p>
            </div>

            {/*  mew div */}
            <div className="flex gap-4 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold  text-white">
                রাজনীতি
              </h2>
              <p className="text-[16px]  font-noto-sans-bengali  text-white">
                ২৩
              </p>
            </div>

            {/*  mew div */}

            <div className="flex gap-2 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold  text-white">
                বিনোদন
              </h2>
              <p className="font-normal text-[16px]  text-white font-noto-sans-bengali">
                65
              </p>
            </div>
            <div className="flex gap-2 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold  text-white">
                চাকরি
              </h2>
              <p className="font-normal text-[16px]  text-white font-noto-sans-bengali">
                15
              </p>
            </div>
            <div className="flex gap-2 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold text-white">
                খেলা
              </h2>
              <p className="font-normal text-[16px]  text-white font-noto-sans-bengali">
                15
              </p>
            </div>
            <div className="flex gap-2 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold  text-white">
                বাণিজ্য
              </h2>
              <p className="font-normal text-[16px]  text-white font-noto-sans-bengali">
                21
              </p>
            </div>

            {/*    new div */}
          </div>
        </div>

        <div>
          <div className="flex mt-32 sm:flex-row mb-4">
            <div className="lg:flex-col w-40 ml-8">
              <Image
                className="lg:w-full h-full"
                src={logo}
                alt="image"
              ></Image>
            </div>
            <div className="flex lg:flex-col flex-col ml-2">
              <div>
                <h2 className="font-bold text-[20px]  text-white">যোগাযোগ:</h2>
              </div>
              <div className="">
                <p className="lg:text-[12px] sm:text-[12px] font-normal font-noto-sans-bengali  text-white uppercase">
                  dainik janashakti
                </p>
                <p className="lg:text-[12px] sm:text-[12px] font-normal font-noto-sans-bengali  text-white"></p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-normal text-[16px]  text-white font-noto-sans-bengali text-right mr-6">
              এই ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
