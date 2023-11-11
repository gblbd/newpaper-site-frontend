import LeftPart from "./LeftPart";
import MiddlePart from "./MiddlePart";
import RightPart from "./RightPart";

const NewsDetailsComponent = () => {
  return (
    <div className="grid sm:grid-cols-12 sm:gap-4 mt-16 sm-px-0 px-2">
      <div className="sm:col-span-3 sm:mt-0 mt-6">
        <LeftPart></LeftPart>
      </div>
      <div className="sm:col-span-6 sm:mt-0 mt-6">
        <MiddlePart></MiddlePart>
      </div>
      <div className="sm:col-span-3 sm:mt-0 mt-6">
        <RightPart></RightPart>
      </div>
    </div>
  );
};

export default NewsDetailsComponent;
