import { Inter } from "next/font/google";
import HomePage from "./homepage";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/all-recent-news-list`
    );
    const data = await res.json();

    const categoryRes = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/categorey-data-list`
    );
    const categoryData = await categoryRes.json();

    // Initialize an object to store data by category
    const dataByCategory = [];

    // Fetch news data for each category
    await Promise.all(
      categoryData.map(async (category) => {
        const newsRes = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/all-news-by-categorey-list/${category._id}`
        );
        const newsData = await newsRes.json();

        // Store data in the object with the category name as the key
        dataByCategory.push({
          categoreyName: category.categoreyName,
          newsArray: newsData.result || [], // Use an empty array if no data
        });
      })
    );

    return {
      props: {
        data,
        dataByCategory: dataByCategory,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        categoryData: [],
      },
    };
  }
};

export default function Home({ data, dataByCategory }) {
  return (
    <main>
      <HomePage data={data} dataByCategory={dataByCategory}></HomePage>
    </main>
  );
}
