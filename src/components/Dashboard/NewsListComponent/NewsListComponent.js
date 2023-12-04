import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { GiSightDisabled } from "react-icons/gi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
import { getCookie } from "../../../utilities/helper.js";
// Function to make the GET request with JWT token

const NewsListComponent = ({
  newsList,
  page,
  pageCount,
  setPageCount,
  setPage,
}) => {
  const { user, setUser, isLoading, setIsLoading } = useAuth();

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

  /* const originalDate = "2023-15-11T10:38:20.181Z";
  const formattedDate = formatBanglaDate(originalDate);

  console.log(formattedDate); // Output: ১৫ নভেম্বর ২০২৩ */
  /* delete news */
  const handelDelete = (id) => {
    setIsLoading(true);
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/news-data-delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
          data: {
            userId: user?._id,
          },
        }
      )
      .then((res) => {
        setIsLoading(false);

        const posts = newsList.finalResult.filter((item) => item._id !== id);
        setListNews(posts);

        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const handelAcceptNews = (id) => {
    setIsLoading(true);
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/news-accept-admin/${id}`,
        {
          // Request body data goes here if needed
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      )
      .then((res) => {
        // const posts = newsList.finalResult.filter((item) => item._id !== id);
        // setListNews(posts);
        setIsLoading(false);
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const handelDisabletNews = (id) => {
    setIsLoading(true);
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/news-disable-admin/${id}`,
        {
          // Request body data goes here if needed
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      )
      .then((res) => {
        // const posts = newsList.finalResult.filter((item) => item._id !== id);
        // setListNews(posts);
        setIsLoading(false);
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-10">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">NEWS LIST</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      News
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Categorey
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>

                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {newsList?.map((data) => (
                    <tr key={data._id}>
                      <td className="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-36 h-20">
                            <Image
                              className="w-full h-full"
                              width={150}
                              height={80}
                              src={data.newsImage}
                              alt="news"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {data.newsTitle}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data.categoryName}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {formatBanglaDate(data.createdAt)}
                        </p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative  py-1 font-semibold  flex gap-3 ">
                          <span
                            aria-hidden
                            className="absolute inset-0  opacity-50 rounded-full"
                          ></span>
                          {user.role === "super-admin" ? (
                            <>
                              <button
                                onClick={() => handelDelete(data._id)}
                                class="relative font-bold text-3xl text-red-600"
                              >
                                <MdOutlineDeleteOutline />
                              </button>

                              {data.isPublished === true ? (
                                <button
                                  onClick={() => handelDisabletNews(data._id)}
                                  className="relative font-bold text-3xl text-green-600"
                                >
                                  <GiSightDisabled />
                                </button>
                              ) : (
                                <button
                                  onClick={() => handelAcceptNews(data._id)}
                                  className="relative font-bold text-3xl text-gray-600"
                                >
                                  <GiSightDisabled />
                                </button>
                              )}
                              <Link
                                href={`/dashboard/edit-news/${data._id}`}
                                className="relative font-bold text-3xl text-green-600"
                              >
                                <FaEdit />
                              </Link>
                            </>
                          ) : (
                            <Link
                              href={`/dashboard/news-edit/${data._id}`}
                              className="relative font-bold text-3xl text-green-600"
                            >
                              <FaEdit />
                            </Link>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex items-center justify-between   bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              {page === 1 ? (
                <button
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled"
                  disabled
                >
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
                    onClick={() => setPage(number + 1)}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {number + 1}
                  </button>
                ))}
              </nav>
              {page === pageCount ? (
                <button
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 "
                  disabled
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => setPage(page + 1)}
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <p className="font-normal text-black">17 এর 1 পৃষ্ঠা</p>
        </div>
      </div>
    </div>
  );
};

export default NewsListComponent;
