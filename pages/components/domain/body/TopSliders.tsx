import Image from "next/image";
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
import PhonePhoto from "../../../../public/photos/phonePhoto.png";
import PhotoSanford from "../../../../public/photos/sanford.png";
import NavIcon from "../../../../public/svg/leftdirectionIcongray.svg";
import Bottom1 from "../../../../public/photos/bottom1.png";
import Bottom2 from "../../../../public/photos/bottom2.png";

function TopSliders() {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <div className=" grid grid-cols-5 gap-3 mt-5">
        <div className="  bg-slate-100  rounded-2xl h-96 lg:mt-0 -mt-4  invisible lg:visible ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            // pagination={{ clickable: true, type: "bullets" }}
          >
            <SwiperSlide className="">
              <div className=" items-center">
                <Image
                  className=" rounded-2xl  mt-5 "
                  src={PhotoSanford}
                  alt=""
                />
              </div>

              <div className=" grid grid-cols-1 items-center">
                <div className=" flex flex-row-reverse font-black mr-10">
                  sanford همزن
                </div>
                <div className=" flex flex-row ml-3">
                  <h6>تومان</h6>
                  <h1 className=" font-black">4,420,000</h1>
                </div>
                <div className=" flex justify-between mt-9">
                  <h1 className=" font-semibold line-through ml-3 text-slate-400">
                    4,754,000
                  </h1>
                  <h1 className=" bg-red-600 text-white rounded-full text-center w-12 h-9 mr-3">
                    34%
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center">
                <Image
                  className=" rounded-2xl  mt-5 "
                  src={PhotoSanford}
                  alt=""
                />
              </div>
              <div className=" grid grid-cols-1">
                <div className=" flex flex-row-reverse font-black mr-10">
                  sanford همزن
                </div>
                <div className=" flex flex-row ml-3">
                  <h6>تومان</h6>
                  <h1 className=" font-black">4,420,000</h1>
                </div>
                <div className=" flex justify-between mt-9">
                  <h1 className=" font-semibold line-through ml-3 text-slate-400">
                    4,754,000
                  </h1>
                  <h1 className=" bg-red-600 text-white rounded-full text-center w-12 h-9 mr-3">
                    34%
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center">
                <Image
                  className=" rounded-2xl  mt-5 "
                  src={PhotoSanford}
                  alt=""
                />
              </div>
              <div className=" grid grid-cols-1">
                <div className=" flex flex-row-reverse font-black mr-10">
                  sanford همزن
                </div>
                <div className=" flex flex-row ml-3">
                  <h6>تومان</h6>
                  <h1 className=" font-black">4,420,000</h1>
                </div>
                <div className=" flex justify-between mt-9">
                  <h1 className=" font-semibold line-through ml-3 text-slate-400">
                    4,754,000
                  </h1>
                  <h1 className=" bg-red-600 text-white rounded-full text-center w-12 h-9 mr-3">
                    34%
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center">
                <Image
                  className=" rounded-2xl  mt-5 "
                  src={PhotoSanford}
                  alt=""
                />
              </div>
              <div className=" grid grid-cols-1">
                <div className=" flex flex-row-reverse font-black mr-10">
                  sanford همزن
                </div>
                <div className=" flex flex-row ml-3">
                  <h6>تومان</h6>
                  <h1 className=" font-black">4,420,000</h1>
                </div>
                <div className=" flex justify-between mt-9">
                  <h1 className=" font-semibold line-through ml-3 text-slate-400">
                    4,754,000
                  </h1>
                  <h1 className=" bg-red-600 text-white rounded-full text-center w-12 h-9 mr-3">
                    34%
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="-mt-49 flex justify-between -mt-48">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className=" z-10 transform motion-safe:hover:scale-110"
            >
              <NavIcon />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className=" z-10 rotate-180 transform motion-safe:hover:scale-110"
            >
              <NavIcon />
            </button>
          </div>
        </div>

        <div className=" lg:col-span-4 col-span-5 lg:mt-0  -mt-96">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
            pagination={{ clickable: true, type: "bullets" }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            onInit={() => setInit(true)}
          >
            <SwiperSlide className="">
              <Image
                className=" rounded-2xl w-full lg:h-96 h-44  "
                src={PhonePhoto}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                className="rounded-2xl w-full lg:h-96 h-44 "
                src={PhonePhoto}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                className="rounded-2xl w-full lg:h-96 h-44  "
                src={PhonePhoto}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
                className="rounded-2xl w-full lg:h-96 h-44  "
                src={PhonePhoto}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <div className=" flex justify-between">
            <button
              ref={prevRef}
              className=" z-50 relative  lg:-top-60 -top-32 lg:ml-0  transform motion-safe:hover:scale-110"
            >
              <NavIcon />
            </button>
            <button
              ref={nextRef}
              className="z-50 rotate-180 relative lg:-top-60 -top-32 lg:mr-0 transform motion-safe:hover:scale-110"
            >
              <NavIcon />
            </button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-4 -mt-20 w-full invisible lg:visible">
        <div>
          <Image src={Bottom2} alt="" className="w-1200 rounded-2xl" />
        </div>
        <div className="">
          <div className=" ">
            <Image src={Bottom1} alt="" className="w-1200 rounded-2xl" />
          </div>
        </div>
      </div>
      <div className=" flex justify-between gap-10 md:-mt-60 sm:-mt-52 mobile:-mt-48  w-full lg:invisible visible">
        <div>
          <Image src={Bottom2} alt="" className="w-1200 rounded-2xl" />
        </div>
        <div className="">
          <div className=" ">
            <Image src={Bottom2} alt="" className="w-1200 rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSliders;
