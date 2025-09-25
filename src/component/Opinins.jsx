import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import img from "../assets/images/Person.png";
import Fullstar from "../assets/images/star_purple500.svg";
import Outlinestar from "../assets/images/star_outline.svg";

export default function Opinins() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const opinions = [1, 2, 3, 4, 5, 6]; // بيانات افتراضية

  return (
    <div className="relative px-[50px] py-[20px] ">
    
      <div className="text-center mb-[70px]">
        <p className="font-[400] text-[24px] text-[#F3BB44] pb-[20px]">
          أراء العملاء
        </p>
        <h1 className="font-[700]  lg:text-[32px] text-main leading-1">
          تعرف علي أراء العملاء و تقييماتهم
        </h1>
      </div>

     
      <div className="absolute left-[50px] top-[150px] lg:top-[70px] flex gap-4 -translate-y-1/2 z-10">
       
        <button
          onClick={() => swiperRef.current.slideNext()}
          className={`rounded-full border-[1px] border-[#267FD0] p-[5px] ${
            !isEnd ? "bg-main text-white" : "bg-white text-main"
          }`}
        >
          <IoIosArrowRoundForward size={24} />
        </button>

        <button
          onClick={() => swiperRef.current.slidePrev()}
          className={`rounded-full border-[1px] border-[#267FD0] p-[5px] ${
            !isBeginning ? "bg-main text-white" : "bg-white text-main"
          }`}
        >
          <IoIosArrowRoundBack size={24} />
        </button>


      </div>
      

     
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 }, // small
          768: { slidesPerView: 2 }, // medium
          1024: { slidesPerView: 3 }, // large
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="pb-10"
      >
        {opinions.map((_, index) => (
          <SwiperSlide key={index}>
            <Opinion />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Opinion() {
  return (
    <div className="border-[1px] border-[#CECECE] flex flex-col gap-[20px] rounded-[10px] max-w-[450px] py-[20px] px-[15px]  ">
      <div className="flex gap-[10px]">
        <img className="w-[50px] rounded-[10px]" src={img} alt="person photo" />
        <div>
          <p className="font-[400] text-[16px] text-main ">اسم المستخدم</p>
          <p className="flex">
            <span>
              <img src={Outlinestar} alt="star" />
            </span>
            <span>
              <img src={Fullstar} alt="star" />
            </span>
            <span>
              <img src={Fullstar} alt="star" />
            </span>
            <span>
              <img src={Fullstar} alt="star" />
            </span>
          </p>
        </div>
      </div>
      <div className="text-[#8C8F95] text-[16px] font-[400] leading-[26px]">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحةهذا النص هو مثال لنص
        يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في
        نفس المساحةهذا النص هو مثال
      </div>
    </div>
  );
}
