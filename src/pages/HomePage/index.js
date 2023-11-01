import Advertise from "@/components/HomeComponents/Addvertise/Advertise";
import BannerRecentNews from "@/components/HomeComponents/BannerRecentNews/BannerRecentNews";
import NationalNewsPart from "@/components/HomeComponents/NationalNewsPart/NationalNewsPart";
import PoliticsNews from "@/components/HomeComponents/politcisNews/PoliticsNews";
import Navbar from "@/components/Shared/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BannerRecentNews></BannerRecentNews>
      <Advertise></Advertise>
      <NationalNewsPart></NationalNewsPart>
      <PoliticsNews></PoliticsNews>
    </div>
  );
};

export default HomePage;
