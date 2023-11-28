import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import side1 from "../../../assets/saradesh/side1.png";
import side2 from "../../../assets/saradesh/side2.png";
import side3 from "../../../assets/saradesh/side3.png";
import side4 from "../../../assets/saradesh/side4.png";
import side5 from "../../../assets/saradesh/side5.png";
const TotalCountry = () => {
  const [newsList, setNewsList] = useState([]);

  //fetch data from db
  const [pageCount, setPageCount] = useState(0);
  //page button er jonnno
  const [page, setPage] = useState(0);

  //load data
  let size = 6;
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/all-new-country-list?page=${page}&&size=${size}`
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
  const handleNextPage = () => {
    if (page < pageCount - 1) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
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
    <div className=" grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 ">
        <button
          className="bg-[#066F30] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-2px]"
          type="button"
        >
          সারাদেশ
        </button>
        <div className="h-[2px] w-full border-b-[1px] border-black mb-10 "></div>

        {/*    new desin part */}
        <div className=" grid sm:grid-cols-2 sm:gap-5  sm:my-6 grid-cols-none">
          {newsList.map((data) => (
            <div key={data._id} className="">
              <div className="h-64">
                <Image
                  className="w-full h-full"
                  width={0}
                  height={0}
                  src={data.newsImage}
                  alt="image"
                ></Image>
              </div>
              <div className="mt-2">
                <Link href="#">
                  <h2 className="font-noto-sans-bengali text-black font-medium">
                    {data.newsTitle}
                  </h2>
                </Link>

                <p className="font-noto-sans-bengali text-black font-light text-sm">
                  {formatBanglaDate(data?.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between ">
          <div className="flex items-center justify-between   bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                {page === 0 ? (
                  <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled">
                    Previous
                  </button>
                ) : (
                  <button
                    onClick={() => setPage(page - 1)}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </button>
                )}
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  {[...Array(pageCount).keys()].map((number) => (
                    <button
                      key={number}
                      onClick={() => setPage(number)}
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {number + 1}
                    </button>
                  ))}
                </nav>
                <button
                  onClick={() => setPage(page + 1)}
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="font-normal text-black">17 এর 1 পৃষ্ঠা</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <button
          className="bg-[#000000] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-3px]"
          type="button"
        >
          বিভাগ
        </button>
        <div className="h-[2px] lg:w-full w-full border-b-[1px] border-black mb-10 "></div>

        <div className="">
          <div className="grid grid-cols-1 mb-4">
            <div className="relative h-16">
              <Image
                src={side1}
                className="w-full h-full opacity-80"
                alt="image"
              ></Image>
            </div>
            <h2 className="absolute mt-18 p-5 text-white text-2xl font-bold">
              রাজনীতি
            </h2>
          </div>
          <div className="grid grid-cols-1 mb-4">
            <div className="relative h-16">
              <Image
                src={side1}
                className="w-full h-full opacity-80"
                alt="image"
              ></Image>
            </div>
            <h2 className="absolute mt-18 p-5 text-white text-2xl font-bold">
              জাতীয়
            </h2>
          </div>
          <div className="grid grid-cols-1 mb-4">
            <div className="relative h-16">
              <Image
                src={side2}
                className="w-full h-full opacity-80"
                alt="image"
              ></Image>
            </div>
            <h2 className="absolute mt-18 p-5 text-white text-2xl font-bold">
              চাকরি
            </h2>
          </div>
          <div className="grid grid-cols-1 mb-4">
            <div className="relative h-16">
              <Image
                src={side3}
                className="w-full h-full opacity-80"
                alt="image"
              ></Image>
            </div>
            <h2 className="absolute mt-18 p-5 text-white text-2xl font-bold">
              বিনোদন
            </h2>
          </div>
          <div className="grid grid-cols-1 mb-4">
            <div className="relative h-16">
              <Image
                src={side4}
                className="w-full h-full opacity-80"
                alt="image"
              ></Image>
            </div>
            <h2 className="absolute mt-18 p-5 text-white text-2xl font-bold">
              বাণিজ্য
            </h2>
          </div>
          <div className="grid grid-cols-1 mb-4">
            <div className="relative h-16">
              <Image
                src={side5}
                className="w-full h-full opacity-80"
                alt="image"
              ></Image>
            </div>
            <h2 className="absolute mt-18 p-5 text-white font-semibold">
              খেলা
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-8 border-2 border-[#0000004D] rounded-2xl">
          <form className="grid grid-cols-1 mb-4 items-center mx-auto mt-4">
            <h2 className=" text-black font-semibold mb-4 text-center">
              -- এলাকা ভিত্তিক সংবাদ
            </h2>
            <div className="mb-2">
              <input
                className="border-2  lg:px-10 lg:py-2 text-sm rounded-md"
                type="text"
                placeholder="বিভাগ"
              ></input>
            </div>
            <div className="mb-2">
              <input
                className="border-2  lg:px-10 lg:py-2 text-sm rounded-md"
                type="text"
                placeholder="বিভাগ"
              ></input>
            </div>
            <div className="mb-2">
              <input
                className="border-2  lg:px-10 lg:py-2 text-sm rounded-md"
                type="text"
                placeholder="জেলা"
              ></input>
            </div>
            <div className="mb-2">
              <input
                className="border-2  lg:px-10 lg:py-2 text-sm rounded-md w-full h-full bg-[#066F30] hover:bg-black hover:text-white text-white"
                type="submit"
                placeholder="উপজেলা"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TotalCountry;
