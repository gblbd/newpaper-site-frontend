import Image from "next/image";
import logo from "../../assets/footer/footerlogo.png";
import sideimg1 from "../../assets/footer/image1.png";
import sideimg2 from "../../assets/footer/image2.png";
import sideimg3 from "../../assets/footer/image3.png";
import sideimg4 from "../../assets/footer/image4.png";
import sideimg5 from "../../assets/footer/image5.png";
const FooterComponents = () => {
  return (
    <div className="mt-10">
      <div className="bg-footer-texture sm:w-full bg-cover bg-no-repeat">
        <div className="sm:container sm:mx-auto grid sm:grid-cols-3 sm:gap-8">
          <div className=" mt-12">
            <h2 className="text-[26px] font-noto-sans-bengali text-white">
              {" "}
              সারাদেশ
            </h2>

            <div className="grid grid-cols-5 gap-4 mx-auto mt-4 ">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg1}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                  মাধ্যমিক স্কুলে ভর্তির আবেদন শুরু ২৪ অক্টোবর
                </h2>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*  mew div */}
            <div className="grid grid-cols-5 gap-4 mx-auto mt-4 ">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg2}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                  কলেজে ভর্তি হতে পারেনি সাড়ে ১২ হাজার শিক্ষার্থী
                </h2>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*  mew div */}

            <div className="grid grid-cols-5 gap-4 mx-auto mt-4">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg3}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                  সাত কলেজে ভর্তির চূড়ান্ত তালিকা প্রকাশ
                </h2>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*    new div */}
            {/* logo iv */}
            <div className="flex  mt-36">
              <div className="">
                <Image className="w-full" src={logo} alt="image"></Image>
              </div>
              <div className="  items-start mx-4">
                <h2 className="font-bold text-[20px]  text-white">যোগাযোগ:</h2>
                <p className="lg:text-[20px] sm:text-[14px] font-semibold font-noto-sans-bengali  text-white">
                  Gorgeous Bangladesh Limited
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-12">
            <h2 className="text-[26px] font-noto-sans-bengali  text-white">
              {" "}
              ভিডিও
            </h2>
            <div className="grid grid-cols-5 gap-4 mx-auto mt-4 ">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg3}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                  কোনো আরব দেশই ফিলিস্তিনিদের জন্য সীমান্ত খুলছে না
                </h2>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*  mew div */}
            <div className="grid grid-cols-5 gap-4 mx-auto mt-4 ">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg4}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                  জানা গেল ঘূর্ণিঝড় ‘তেজ’ কবে আঘাত হানবে
                </h2>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*  mew div */}

            <div className="grid grid-cols-5 gap-4 mx-auto mt-4">
              <div className="col-span-2">
                <Image
                  className="w-full h-full"
                  src={sideimg5}
                  alt="image"
                ></Image>
              </div>
              <div className="col-span-3 mt-2">
                <h2 className=" lg:text-[20px] sm:text-[14px] font-semibold text-white">
                  ফিলিস্তিনের ভূখণ্ড ফেরত চাইলেন সৌদি যুবরাজ
                </h2>
                <p className=" lg:text-[16px] sm:text-[14px] font-noto-sans-bengali  text-white">
                  ২২ অক্টোবর ২০২৩
                </p>
              </div>
            </div>

            {/*    new div */}
          </div>
          <div className=" mt-12">
            <h2 className="text-[26px] font-noto-sans-bengali  text-white text-center">
              জনপ্রিয় বিভাগ
            </h2>
            <div className="flex gap-4 mt-4 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold text-white">
                জাতীয়
              </h2>
              <p className=" text-[16px] font-noto-sans-bengali  text-white">
                ২২
              </p>
            </div>

            {/*  mew div */}
            <div className="flex gap-4 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold  text-white">
                রাজনীতি
              </h2>
              <p className="text-[16px]  font-noto-sans-bengali  text-white">
                ২৩
              </p>
            </div>

            {/*  mew div */}

            <div className="flex gap-2 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold  text-white">
                বিনোদন
              </h2>
              <p className="font-normal text-[16px]  text-white font-noto-sans-bengali">
                65
              </p>
            </div>
            <div className="flex gap-2 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold  text-white">
                চাকরি
              </h2>
              <p className="font-normal text-[16px]  text-white font-noto-sans-bengali">
                15
              </p>
            </div>
            <div className="flex gap-2 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold text-white">
                খেলা
              </h2>
              <p className="font-normal text-[16px]  text-white font-noto-sans-bengali">
                15
              </p>
            </div>
            <div className="flex gap-2 mt-6 justify-evenly">
              <h2 className="lg:text-[20px] sm:text-[14px] font-semibold  text-white">
                বাণিজ্য
              </h2>
              <p className="font-normal text-[16px]  text-white font-noto-sans-bengali">
                21
              </p>
            </div>

            {/*    new div */}
          </div>
        </div>

        <h3 className="font-normal text-[16px]  text-white font-noto-sans-bengali text-right mr-6">
          এই ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
        </h3>
      </div>
    </div>
  );
};

export default FooterComponents;
