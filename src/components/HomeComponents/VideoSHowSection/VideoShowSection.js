import Link from "next/link";
import { useEffect, useState } from "react";

const VideoShowSection = () => {
  const [newsList, setNewsList] = useState([]);

  //fetch data from db
  const [pageCount, setPageCount] = useState(0);
  //page button er jonnno
  const [page, setPage] = useState(0);

  //load data
  let size = 6;
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
    <div className=" grid  gap-4">
      <div className=" ">
        <button
          className="bg-[#066F30] font-bold text-white lg:px-10 lg:py-2 lg:mb-[-3px]  lg:ml-0 mt-1 px-10 py-2 mb-[-2px]"
          type="button"
        >
          ভিডিও
        </button>
        <div className="h-[2px] w-full border-b-[1px] border-black mb-10 "></div>

        {/*    new desin part */}
        <div className=" grid sm:grid-cols-3 sm:gap-3  sm:my-6 grid-cols-none">
          {newsList.map((data) => (
            <div
              key={data._id}
              className="border grid grid-rows-6 rounded-xl shadow-md border-black"
            >
              <div className="row-span-5">
                <iframe
                  className="p-4 w-full h-full"
                  src={data.newsVideoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-1 row-span-1 ml-4">
                <Link href="#">
                  <h2 className="font-noto-sans-bengali text-black font-medium">
                    {data.newsVideoTitle}
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
    </div>
  );
};

export default VideoShowSection;
