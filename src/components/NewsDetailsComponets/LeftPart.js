import Image from "next/image";
import add2 from "../../assets/details/add2.png";
const LeftPart = () => {
  return (
    <div className="">
      <div className="w-full text-left font-noto-sans-bengali font-normal">
        <p>. /চট্টগ্রাম সারাবেলা</p>
        <p>. হাটহাজারী (চট্টগ্রাম) প্রতিনিধি</p>
        <p>0২ নভেম্বর ২০২৩, ১২:২৪ পিএম</p>
        <p>অনলাইন সংস্করণ</p>
      </div>

      <div className="w-full h-full my-4">
        <Image src={add2} alt="image"></Image>
      </div>
    </div>
  );
};

export default LeftPart;
