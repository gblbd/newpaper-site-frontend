import FooterComponents from "@/components/FooterComponents/FooterComponents";
import Advertise from "@/components/HomeComponents/Addvertise/Advertise";
import BannerRecentNews from "@/components/HomeComponents/BannerRecentNews/BannerRecentNews";
import Entertainment from "@/components/HomeComponents/Entertainment/Entertainment";
import NationalNewsPart from "@/components/HomeComponents/NationalNewsPart/NationalNewsPart";
import TotalCountry from "@/components/HomeComponents/TotalCountry/TotalCountry";
import VideoShowSection from "@/components/HomeComponents/VideoSHowSection/VideoShowSection";
import WorldComponent from "@/components/HomeComponents/WorldComponent/WorldComponent";
import PoliticsNews from "@/components/HomeComponents/politcisNews/PoliticsNews";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import MotamotComponent from "../components/HomeComponents/MotamotComponent/MotamotComponent";

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
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main>
      {isClient ? (
        <>
          <Navbar></Navbar>
          <div className="max-w-7xl mx-auto">
            <BannerRecentNews data={data}></BannerRecentNews>
            <Advertise></Advertise>
            <NationalNewsPart
              dataByCategory={dataByCategory}
            ></NationalNewsPart>
            <WorldComponent dataByCategory={dataByCategory}></WorldComponent>
            <PoliticsNews dataByCategory={dataByCategory}></PoliticsNews>
            <TotalCountry dataByCategory={dataByCategory}></TotalCountry>

            <Entertainment dataByCategory={dataByCategory}></Entertainment>
            <MotamotComponent
              dataByCategory={dataByCategory}
            ></MotamotComponent>
            <VideoShowSection></VideoShowSection>
          </div>
          <FooterComponents></FooterComponents>
        </>
      ) : (
        "loading"
      )}
    </main>
  );
}
