import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Home.css';

import Top from "../assets/images/Twopuple.svg"
import Bottom from "../assets/images/Onepuple.svg"


import img1 from "../assets/images/sec1.png";
import img2 from "../assets/images/sec2.png";
import img3 from "../assets/images/sec3.png";
import img4 from "../assets/images/sec4.png";
import img5 from "../assets/images/sec5.png";

const Imagearray = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

export default function Screens() {
  return (
    <div className='lg:mt-[0px] relative'>
        <h1 className='text-center text-main font-[700] lg:mb-[50px] text-[32px]'>شاشات التطبيق</h1>
        <img className='absolute top-0 left-0 z-0' src={Bottom}/>
        <img className='absolute bottom-0 right-0 ' src={Top}/>
      <Swiper
        className="mySwiper"
       
        slidesPerView={1}
        spaceBetween={15}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        loop={true}
        // Breakpoints
        breakpoints={{
         
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
         
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {Imagearray.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} className='rounded-[15px] border-[1px] border-[#267FD0]' alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
