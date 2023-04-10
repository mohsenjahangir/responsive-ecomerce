import Image from "next/image";
import FireSvg from "../../../../public/svg/fireIcon.svg";
import SanfordPhoto from "../../../../public/photos/sanford.png";
import Fire2Svg from "../../../../public/svg/fire2Icon.svg";
import HeadsetPhoto from "../../../../public/photos/headset.png";
import {
  Swiper as SwiperType,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Amazing() {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const AmazingItems: {
    id: number;
    icon: any;
    title: string;
    price: string;
    price2: string;
    off: string;
    image: any;
  }[] = [
    {
      id: 1,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
      id: 2,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
      id: 3,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
      id: 4,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
      id: 5,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
      id: 6,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
      id: 7,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
      id: 8,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
    {
      id: 9,
      icon: Fire2Svg,
      image: HeadsetPhoto,
      price: "4,343,000 تومان",
      price2: "4,343,000",
      title: "کتونی نایک شماره 121",
      off: "34%",
    },
  ];
  const text = "< مشاهده ی همه";
  return (
    <>
      <div className=" flex justify-between gap-4 items-center    truncate  lg:mt-10 relative  -mt-96 -top-72 md:-top-72  sm:top-1 lg:-top-0 mobile:top-10  ">
        <h1 className=" hover:scale-90 active:text-red-500">{text}</h1>
        <fieldset className="flex-grow h-px bg-gray-400"></fieldset>
        <div className="flex flex-row gap-4">
          پیشنهادهای شگفت انگیز
          <div className="  bg-slate-200 w-8 h-8 pl-2 pt-1 rounded-full">
            <FireSvg />
          </div>
        </div>
      </div>

      <div className=" rounded-2xl  lg:invisible visible relative -top-60 md:-top-64 sm:top-3 mobile:top-12">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
          // pagination={{ clickable: true, type: "bullets" }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          onInit={() => setInit(true)}
          className="   "
        >
          {AmazingItems.map((item) => (
            <SwiperSlide className=" ">
              <div className=" bg-slate-100 grid grid-cols-3 rounded-2xl hover:scale-105  active:bg-slate-300">
                <div className=" col-span-2">
                  <div>
                    <Fire2Svg />
                  </div>
                  <h1 className=" xl:truncate float-right font-black -mr-3">
                    {item.title}
                  </h1>
                  <br />
                  <h1 className=" ml-2"> {item.price}</h1>
                  <div className=" grid grid-cols-2 ml-1">
                    <h1 className=" ml-2 line-through text-slate-400">
                      {item.price2}
                    </h1>
                    <h1 className=" ml-12 bg-red-600 rounded-full w-12 pl-4 h-8 text-white">
                      {item.off}
                    </h1>
                  </div>
                </div>
                <div className="">
                  <Image src={item.image} alt="" className="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" lg:grid lg:grid-cols-4 lg:-mt-20   lg:gap-4 invisible lg:visible ">
        <div className=" col-span-3">
          <div className=" grid grid-cols-4   gap-4 ">
            {AmazingItems.map((item) => (
              <div className=" bg-slate-100 grid grid-cols-3 rounded-2xl hover:scale-105 active:bg-slate-200">
                <div className=" col-span-2">
                  <div>
                    <Fire2Svg />
                  </div>
                  <h1 className=" xl:truncate float-right font-black -mr-3">
                    {item.title}
                  </h1>
                  <br />
                  <h1 className=" ml-2"> {item.price}</h1>
                  <div className=" grid grid-cols-2 ml-1">
                    <h1 className=" ml-2 line-through text-slate-400">
                      {item.price2}
                    </h1>
                    <h1 className=" ml-12 bg-red-600 rounded-full w-12 pl-4 h-8 text-white">
                      {item.off}
                    </h1>
                  </div>
                </div>
                <div className="">
                  <Image src={item.image} alt="" className="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:flex lg:flex-row-reverse invisible lg:visible">
          <div className=" bg-slate-100 w-64  xl:h-96 rounded-2xl">
            <div className="">
              <Fire2Svg />
            </div>
            <Image src={SanfordPhoto} alt="" className=" ml-8" />
            <h1 className=" font-black flex flex-row-reverse mr-5">
              sanford همزن برقی
            </h1>
            <h1 className=" mt-12 ml-5">تومان4,443,000</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amazing;
