import LeftPart from "./LeftPart";
import MiddlePart from "./MiddlePart";
import RightPart from "./RightPart";

const NewsDetailsComponent = ({ newsItem }) => {
  return (
    <div className="grid sm:grid-cols-12 sm:gap-4 mt-16 sm:mx-4 mx-4 lg:mx-0">
      <div className="sm:col-span-3 sm:mt-0 mt-6">
        <LeftPart></LeftPart>
      </div>
      <div className="sm:col-span-6 sm:mt-0 mt-6">
        <MiddlePart newsItem={newsItem}></MiddlePart>
      </div>
      <div className="sm:col-span-3 sm:mt-0 mt-6">
        <RightPart></RightPart>
      </div>
    </div>
  );
};

export default NewsDetailsComponent;
