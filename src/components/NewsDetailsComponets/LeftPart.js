import Image from "next/image";
import side2 from "../../assets/banner/side1.png";
import side1 from "../../assets/banner/side2.png";
import side3 from "../../assets/banner/side3.png";
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

      <div>
        <div className="border-2 border-l-0 border-r-0 py-4 mt-6 items-center">
          <div className="text-2xl font-bold font-noto-sans-bengali text-black overflow-hidden">
            <div className="font-medium">এ সম্পর্কিত আরও খবর</div>
          </div>
        </div>

        <div className="mt-4 border-2 border-gray-400">
          <div className="grid grid-cols-7 gap-2 p-2">
            <div className="w-full h-full col-span-3">
              <Image src={side1} alt="image"></Image>
            </div>
            <div className="col-span-4">
              <p className="font-noto-sans-bengali text-black font-normal text-justify">
                ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ ইসরায়েল
                সফর করেছেন ...
              </p>
            </div>
          </div>
          <div className="h-1 border-b-[1px] border-black mt-2 mx-2"></div>
          <div className="grid grid-cols-7 gap-2 p-2">
            <div className="w-full h-full col-span-3">
              <Image src={side3} alt="image"></Image>
            </div>
            <div className="col-span-4">
              <p className="font-noto-sans-bengali text-black font-normal text-justify">
                ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ ইসরায়েল
                সফর করেছেন ...
              </p>
            </div>
          </div>

          <div className="h-1 border-b-[1px] border-black mt-2  mx-2"></div>
          <div className="grid grid-cols-7 gap-2 p-2">
            <div className="w-full h-full col-span-3">
              <Image src={side2} alt="image"></Image>
            </div>
            <div className="col-span-4">
              <p className="font-noto-sans-bengali text-black font-normal text-justify">
                ইসরায়েল ও ফিলিস্তিনের যুদ্ধ চলমান। এর মধ্যেই মিত্রদেশ ইসরায়েল
                সফর করেছেন ...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full my-4">
        <Image className="w-full h-full" src={add2} alt="image"></Image>
      </div>
    </div>
  );
};

export default LeftPart;
