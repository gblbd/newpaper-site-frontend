import FooterComponents from "@/components/FooterComponents/FooterComponents";
import NewsDetailsComponent from "@/components/NewsDetailsComponets/NewsDetailsComponent";
import Navbar from "@/components/Shared/Navbar/Navbar";

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  // Fetch data based on the ID from your API or database
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API}/api/home-page-news-details?id=${id}`
  );
  const data = await response.json();

  // Pass the data as props to the component
  return {
    props: {
      newsItem: data,
    },
  };
}
const NewsDetails = ({ newsItem }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <NewsDetailsComponent newsItem={newsItem}></NewsDetailsComponent>
      </div>
      <FooterComponents></FooterComponents>
    </div>
  );
};

export default NewsDetails;
