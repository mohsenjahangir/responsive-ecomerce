import MenuIconSvg from "../../../../public/svg/menuIcon.svg";
import BigCart from "../../../../public/photos/bigcart.png";
import Image from "next/image";
import Catego1 from "../../../../public/photos/cate (1).png";
import Catego2 from "../../../../public/photos/cate (2).png";
import Catego3 from "../../../../public/photos/cate (3).png";
import Catego4 from "../../../../public/photos/cate (4).png";
import Catego5 from "../../../../public/photos/cate (5).png";
import Catego6 from "../../../../public/photos/cate (6).png";
import Catego7 from "../../../../public/photos/cate (7).png";
import Catego8 from "../../../../public/photos/cate (8).png";
import Catego9 from "../../../../public/photos/cate (9).png";

function Favorite() {
  const CategoItems: {
    title: string;
    price: string;
    off: string;
    image: any;
    id: Number;
  }[] = [
    {
      id: 1,
      image: Catego1,
      price: "4,343,000",
      title: "تجهیزات صنعتی",
      off: "34%",
    },
    {
      id: 2,
      image: Catego2,
      price: "4,343,000",
      title: "لوازم تحریر",
      off: "34%",
    },
    {
      id: 3,
      image: Catego3,
      price: "4,343,000",
      title: "کالای دیجیتال",
      off: "34%",
    },
    {
      id: 4,
      image: Catego4,
      price: "4,343,000",
      title: "موبایل",
      off: "34%",
    },
    {
      id: 5,
      image: Catego5,
      price: "4,343,000",
      title: "مدوپوشاک",
      off: "34%",
    },
    {
      id: 6,
      image: Catego6,
      price: "4,343,000",
      title: "خانه و آشپزخانه",
      off: "34%",
    },
    {
      id: 7,
      image: Catego7,
      price: "4,343,000",
      title: "زیبایی و سلامت",
      off: "34%",
    },
    {
      id: 8,
      image: Catego8,
      price: "4,343,000",
      title: "اسباب بازی",
      off: "34%",
    },
    {
      id: 9,
      image: Catego9,
      price: "4,343,000",
      title: "سوپر مارکت",
      off: "34%",
    },
  ];
  const text = "< مشاهده ی همه";
  return (
    <>
      <div className=" lg:grid lg:grid-cols-3 grid-cols-1 flex flex-col-reverse">
        <div className=" lg:mt-12 invisible lg:visible ">
          <Image src={BigCart} alt="" className="w-1000" />
        </div>
        <div className=" lg:col-span-2 relative">
          <div className=" flex justify-between gap-4 items-center  mb-9 truncate  mt-10  ">
            <fieldset className="flex-grow h-px bg-gray-400"></fieldset>
            <div className="flex flex-row gap-4">
              دسته بندی های محبوب
              <div className="  bg-slate-200 w-8 h-8 pl-1 pt-1 rounded-full">
                <MenuIconSvg />
              </div>
            </div>
          </div>
          <div className=" grid md:grid-cols-6 md:gap-9  grid-cols-3  gap-5">
            {CategoItems.map((item) => (
              <div className=" bg-slate-200 rounded-2xl items-center hover:scale-110 active:bg-slate-300 text-center">
                <Image src={item.image} alt="" className=" w-full" />
                <h1 className=" font-black mb-3">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Favorite;
