import NewsListComponent from "@/components/Dashboard/NewsListComponent/NewsListComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const index = ({ newsList, pageCountk, ppagprop, size }) => {
  const [isClient, setIsClient] = useState(false);
  const [pageCount, setPageCount] = useState(pageCountk);
  //page button er jonnno
  const router = useRouter();

  const [page, setPage] = useState(ppagprop);
  useEffect(() => {
    setIsClient(true);
    router.push({
      pathname: router.pathname,
      query: { size: size, page: page },
    });
  }, [page]);
  return (
    <div>
      {isClient && (
        <NewsListComponent
          newsList={newsList}
          page={page}
          pageCount={pageCount}
          setPageCount={setPageCount}
          setPage={setPage}
        ></NewsListComponent>
      )}
    </div>
  );
};
export async function getServerSideProps(con) {
  let page = con.query.page || 1;
  let size = con.query.size || 5;
  const token = con.req.cookies;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/all-news-list-admin-panel/?page=${page}&&size=${size}`,

      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return {
      props: {
        ppagprop: page,
        size: size,
        newsList: data.newsList || [],
        pageCountk: Math.ceil(data.count / size) || 1,
      },
    };
  } catch (error) {
    console.error("Server-side fetch error:", error);

    return {
      props: {
        newsList: [],
        pageCount: 0,
      },
    };
  }
}
export default index;
