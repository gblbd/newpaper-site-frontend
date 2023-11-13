import { BiSolidUserPin } from "react-icons/bi";
const Card = () => {
  return (
    <div className="grid grid-cols-12">
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 col-span-8">
        <div className="bg-[#FC720D66] flex flex-col h-32 gap-4 m-3 p-4">
          <div>
            <h2 className="font-semibold text-lg uppercase">Total User</h2>
          </div>
          <div className="flex ">
            <h2 className="font-semibold text-lg uppercase">23</h2>
            <span className="font-semibold text-lg uppercase ml-28 items-center justify-center text-center">
              <BiSolidUserPin />
            </span>
          </div>
        </div>
        <div className="bg-[#FC720D66] flex flex-col h-32 gap-4 m-3 p-4">
          <div>
            <h2 className="font-semibold text-lg uppercase">Total User</h2>
          </div>
          <div className="flex ">
            <h2 className="font-semibold text-lg uppercase">23</h2>
            <span className="font-semibold text-lg uppercase ml-28 items-center justify-center text-center">
              <BiSolidUserPin />
            </span>
          </div>
        </div>
        <div className="bg-[#FC720D66] flex flex-col h-32 gap-4 m-3 p-4">
          <div>
            <h2 className="font-semibold text-lg uppercase">Total User</h2>
          </div>
          <div className="flex ">
            <h2 className="font-semibold text-lg uppercase">23</h2>
            <span className="font-semibold text-lg uppercase ml-28 items-center justify-center text-center">
              <BiSolidUserPin />
            </span>
          </div>
        </div>
        <div className="bg-[#FC720D66] flex flex-col h-32 gap-4 m-3 p-4">
          <div>
            <h2 className="font-semibold text-lg uppercase">Total User</h2>
          </div>
          <div className="flex ">
            <h2 className="font-semibold text-lg uppercase">23</h2>
            <span className="font-semibold text-lg uppercase ml-28 items-center justify-center text-center">
              <BiSolidUserPin />
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-4 bg-slate-500">map</div>
    </div>
  );
};

export default Card;
