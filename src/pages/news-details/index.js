import FooterComponents from "@/components/FooterComponents/FooterComponents";
import NewsDetailsComponent from "@/components/NewsDetailsComponets/NewsDetailsComponent";
import Navbar from "@/components/Shared/Navbar/Navbar";

const NewsDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <NewsDetailsComponent></NewsDetailsComponent>
      </div>
      <FooterComponents></FooterComponents>
    </div>
  );
};

export default NewsDetails;
