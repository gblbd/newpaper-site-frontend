import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GiSightDisabled } from "react-icons/gi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
import { getCookie } from "../../../utilities/helper.js";
const VideoListComponent = () => {
  const showToastMessage = (sms) => {
    if (sms === "success") {
      toast.success("Deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const [newsList, setListNews] = useState([]);
  const { user, setUser, isLoading, setIsLoading } = useAuth();
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/news-video-data-list-admin`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          "Content-Type": "application/json",
          // Add other headers if needed
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setListNews(data));
  }, []);
  console.log("vvv", user);
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

  const handelDelete = (id) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/news-video-delete/${id}`,
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
        const posts = newsList.filter((item) => item._id !== id);
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
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/accept-news-video-publish/${id}`,
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
        `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/disable-news-video/${id}`,
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
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">
              VIDEO NEWS LIST
            </h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      News
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>

                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {newsList.map((data) => (
                    <tr key={data._id}>
                      <td class="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="flex-shrink-0 w-36 h-20">
                            <iframe
                              className="w-full h-full"
                              src={data.newsVideoUrl}
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {data.newsVideoTitle}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-r border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {formatBanglaDate(data.createdAt)}
                        </p>
                      </td>

                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative  py-1 font-semibold  flex gap-3 ">
                          <span
                            aria-hidden
                            class="absolute inset-0  opacity-50 rounded-full"
                          ></span>
                          {user.role === "super-admin" ? (
                            <>
                              <button
                                onClick={() => handelDelete(data._id)}
                                class="relative font-bold text-3xl text-red-600"
                              >
                                <MdOutlineDeleteOutline />
                              </button>
                              <span class="relative font-bold text-3xl text-green-600">
                                <FaEdit />
                              </span>
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
                            </>
                          ) : (
                            <span class="relative font-bold text-3xl text-gray-600">
                              <GiSightDisabled />
                            </span>
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
    </div>
  );
};

export default VideoListComponent;
