import Image from "next/image";
import add from "../../../assets/add.png";
const Advertise = () => {
  return (
    <div className="">
      <div className="h-1 w-100 border-b-[1px] border-black mt-4 mb-6"></div>
      <Image className="w-full h-[120px]" src={add} alt="img"></Image>
    </div>
  );
};

export default Advertise;
