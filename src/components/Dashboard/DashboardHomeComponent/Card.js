import { BiSolidUserPin } from "react-icons/bi";

const Card = () => {
  return (
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
      <div className="bg-[#FC720D66] flex flex-col h-32 gap-4 m-3 p-4">
        <div>
          <h2 className="font-semibold text-lg uppercase">Total User</h2>
        </div>
        <div className="flex items-center">
          <h2 className="font-semibold text-lg uppercase">23</h2>
          <span className="font-semibold text-lg uppercase ml-28 ">
            <BiSolidUserPin />
          </span>
        </div>
      </div>
      <div className="bg-[#AB111145] flex flex-col h-32 gap-4 m-3 p-4">
        <div>
          <h2 className="font-semibold text-lg uppercase">Total Admin</h2>
        </div>
        <div className="flex items-center">
          <h2 className="font-semibold text-lg uppercase">23</h2>
          <span className="font-semibold text-lg uppercase ml-28 ">
            <BiSolidUserPin />
          </span>
        </div>
      </div>
      <div className="bg-[#13AB5024] flex flex-col h-32 gap-4 m-3 p-4">
        <div>
          <h2 className="font-semibold text-lg uppercase">Total Video</h2>
        </div>
        <div className="flex items-center">
          <h2 className="font-semibold text-lg uppercase">23</h2>
          <span className="font-semibold text-lg uppercase ml-28">
            <BiSolidUserPin />
          </span>
        </div>
      </div>
      <div className="bg-[#9747FF2B] flex flex-col h-32 gap-4 m-3 p-4">
        <div>
          <h2 className="font-semibold text-lg uppercase">Total News</h2>
        </div>
        <div className="flex items-center">
          <h2 className="font-semibold text-lg uppercase">23</h2>
          <span className="font-semibold text-lg uppercase ml-28 ">
            <BiSolidUserPin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
