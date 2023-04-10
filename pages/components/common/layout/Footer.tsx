import Image from "next/image";
import Link from "next/link";
import LogoSvg from "../../../../public/svg/logoIconBig.svg";
import SendSvg from "../../../../public/svg/sendIcon.svg";
import PhoneSvg from "../../../../public/svg/phoneIcon.svg";
import AddressSvg from "../../../public/svg/addressIcon.svg";
import InstagramSvg from "../../../../public/svg/instagramIcon.svg";
import TelegramSvg from "../../../../public/svg/telegramIcon.svg";
import WhatsupSvg from "../../../../public/svg/whatsupIcon.svg";
import StandardPhoto from "../../../../public/photos/standard.png";
import UnitedPhoto from "../../../../public/photos/united.png";
import StandardSamllPhoto from "../../../../public/photos/essmall.png";
import UnitedSmallPhoto from "../../../../public/photos/unitedmall.png";
import ZarrinPhoto from "../../../../public/photos/zarrinPal.png";
import ExbeitPhoto from "../../../../public/photos/exebit.png";
import AndroidIcon from "../../../../public/photos/Download3.png";
import MyketIcon from "../../../../public/photos/Download2.png";
import BazarIcon from "../../../../public/photos/Download1.png";

function Footer() {
  return (
    <>
      <div className="lg:flex mx-5 lg:flex-row-reverse text-end lg:justify-between  lg:mt-52 mt-0      ">
        <div className=" invisible lg:visible w-96">
          <div className="flex flex-row-reverse">
            <LogoSvg />
          </div>
          <h1 className=" font-black">ویتسل</h1>
          <text>
            صرافی هفت ارز پلتفرم ایمن و سریع <br />
            برای انجام معاملات ارز دیجیتال در بستری مطمئن
          </text>
        </div>
        <div className=" md:flex mobile:grid grid-cols-2 lg:w-1000   mobile:justify-between mobile:flex-row-reverse   ">
          <div className="">
            <h1 className=" text-slate-900 font-black">با ویتسل</h1>
            <h6 className=" text-slate-700 mt-2">درباره ما</h6>
            <h6 className=" text-slate-700 mt-2">تماس با ما</h6>
            <h6 className=" text-slate-700 mt-2">حریم خصوصی</h6>
            <h6 className=" text-slate-700 mt-2">شرایط بازگشت کالا</h6>
          </div>
          <div className="">
            <h1 className=" text-slate-900 font-black">محصولات ویتسل</h1>
            <h6 className=" text-slate-700 mt-2">کالای دیجیتال</h6>
            <h6 className=" text-slate-700 mt-2">سوپر مارکت</h6>
            <h6 className=" text-slate-700 mt-2">گوشی موبایل</h6>
            <h6 className=" text-slate-700 mt-2">ابزارآلات</h6>
            <h6 className=" text-slate-700 mt-2"> لوازم تحریر</h6>
          </div>
          <div className="col-start-1 col-end-3 mobile:mt-8 md:mt-0">
            <h1 className=" text-slate-900 font-black"> ارتباط با ویتسل</h1>
            <h6 className=" text-slate-700 mt-3 flex justify-end lg:grid grid-cols-2 lg:-mr-48">
              mo7seven@yahoo.com&nbsp;
              <SendSvg />{" "}
            </h6>
            <h6 className=" text-slate-700 mt-3 flex justify-end lg:grid grid-cols-2 lg:-mr-48">
              +989364358506&nbsp;
              <PhoneSvg />
            </h6>
            <h6 className=" text-slate-700 mt-3">
              تهران خیابان آزادی نرسیده به میدان <br />
              انقلاب
            </h6>
            <div className=" text-slate-700 mt-5  flex flex-row-reverse gap-6 ">
              <div className=" hover:scale-150">
               <WhatsupSvg /> 
              </div>
              <div className=" hover:scale-150">
                <TelegramSvg />
              </div>
              <div className=" hover:scale-150">
                <InstagramSvg />
              </div>
              
            </div>
          </div>
        </div>
        <div className="">
          <div className=" invisible lg:visible w-32">
            <div className=" bg-slate-100  rounded-2xl">
              <Image src={StandardPhoto} alt="" />
            </div>
            <div className=" bg-slate-100  rounded-2xl  lg:mt-3 mt ">
              <Image src={UnitedPhoto} alt="" />
            </div>
          </div>
          <div className=" lg:invisible visible grid grid-cols-4  -mt-48">
            <div className=" bg-slate-100  w-12  lg:invisible">
              <Image src={StandardSamllPhoto} alt="" />
            </div>
            <div className=" bg-slate-100 w-12   lg:mt-3 mt lg:invisible">
              <Image src={UnitedSmallPhoto} alt="" />
            </div>
            <div className=" bg-slate-100 w-12  lg:invisible ">
              <Image src={ZarrinPhoto} alt="" />
            </div>
            <div className=" bg-slate-100 w-12  lg:invisible">
              <Image src={ExbeitPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-row-reverse gap-7 lg:visible invisible">
        <Image src={ AndroidIcon} alt="" className=" hover:scale-105 "/>
        <Image src={MyketIcon} alt="" className=" hover:scale-105 "/>
        <Image src={BazarIcon} alt="" className=" hover:scale-105 "/>
      </div>
      <div className=" mx-5 w-full border-t-2 text-end mt-12">
        <text className=" mx-5">کلیه حقوق متعلق به شرکت ویستا میباشد</text>
      </div>
    </>
  );
}
export default Footer;
