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

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <BannerRecentNews></BannerRecentNews>
        <Advertise></Advertise>
        <NationalNewsPart></NationalNewsPart>
        <PoliticsNews></PoliticsNews>
        <TotalCountry></TotalCountry>
        <WorldComponent></WorldComponent>
        <Entertainment></Entertainment>
        <VideoShowSection></VideoShowSection>
      </div>
      <FooterComponents></FooterComponents>
    </div>
  );
};

export default HomePage;
