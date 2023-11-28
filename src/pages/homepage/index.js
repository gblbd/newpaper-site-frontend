import FooterComponents from "@/components/FooterComponents/FooterComponents";
import Advertise from "@/components/HomeComponents/Addvertise/Advertise";
import BannerRecentNews from "@/components/HomeComponents/BannerRecentNews/BannerRecentNews";
import Entertainment from "@/components/HomeComponents/Entertainment/Entertainment";
import Motamot_Component from "@/components/HomeComponents/Motamot_Component/Motamot_Component";
import NationalNewsPart from "@/components/HomeComponents/NationalNewsPart/NationalNewsPart";
import TotalCountry from "@/components/HomeComponents/TotalCountry/TotalCountry";
import VideoShowSection from "@/components/HomeComponents/VideoSHowSection/VideoShowSection";
import WorldComponent from "@/components/HomeComponents/WorldComponent/WorldComponent";

import PoliticsNews from "@/components/HomeComponents/politcisNews/PoliticsNews";
import Navbar from "@/components/Shared/Navbar/Navbar";

const HomePage = ({ data, dataByCategory }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <BannerRecentNews data={data}></BannerRecentNews>
        <Advertise></Advertise>
        <NationalNewsPart dataByCategory={dataByCategory}></NationalNewsPart>
        <WorldComponent dataByCategory={dataByCategory}></WorldComponent>
        <PoliticsNews dataByCategory={dataByCategory}></PoliticsNews>
        <TotalCountry dataByCategory={dataByCategory}></TotalCountry>

        <Entertainment dataByCategory={dataByCategory}></Entertainment>
        <Motamot_Component dataByCategory={dataByCategory}></Motamot_Component>
        <VideoShowSection></VideoShowSection>
      </div>
      <FooterComponents></FooterComponents>
    </div>
  );
};

export default HomePage;
