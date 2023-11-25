import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GiSightDisabled } from "react-icons/gi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { getCookie } from "../../../utilities/helper";
const VideoListComponent = () => {
  const [newsList, setListNews] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API}/api/news-video-data-list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
        "Content-Type": "application/json",
        // Add other headers if needed
      },
    })
      .then((response) => response.json())
      .then((data) => setListNews(data));
  }, []);
  console.log("vvv", newsList);
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
                          <span class="relative font-bold text-3xl text-red-600">
                            <MdOutlineDeleteOutline />
                          </span>
                          <span class="relative font-bold text-3xl text-green-600">
                            <FaEdit />
                          </span>
                          <span class="relative font-bold text-3xl text-gray-600">
                            <GiSightDisabled />
                          </span>
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
