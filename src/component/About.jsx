import React from 'react'
import Arrow from "../assets/images/Arrow Wiggle Long.svg"
import Phone from "../assets/images/mobile-phone-transfer-svgrepo-com.svg"

export default function About() {
  return (
    <div className='relative h-[1500px] lg:h-[780px] mb-[50px] lg:mb-[0px] bg-[#f3bc44b2] lg:p-[50px]  lg:bg-transparent flex '>
      <div className='absolute lg:bg-[#f3bc44b2]   w-full z-0 top-0 left-0 h-[80%] lg:h-[80%]'></div>
      <div className='text flex flex-col lg:flex-row justify-between   absolute z-100'>
          <div className=' flex lg:pr-[50px] relative p-[30px]'>
            <p className='font-[700] text-[48px] lg:text-[48px] leading-[50px] tracking-[1%] text-main lg:pt-[50px]'>مميزات التطبيق</p>
            <img className='absolute lg:top-[150px] lg:right-[150px]' src={Arrow} alt="" />
          </div>
          <div className='items flex gap-[15px] px-[15px] flex-wrap lg:p-[100px] lg:justify-end justify-center  mt-[100px] lg:mt-[0px] '>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
          </div>
        </div>
    </div>
  )
}

function Item()
{
  return(
    <>
      <div className='flex drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]  flex-col gap-[15px] lg:max-w-[300px] border-[1px] hover:border-[2px] hover:border-[#267FD0] border-gray-400 p-[15px] bg-white rounded-[20px]'>
          <img src={Phone} className='w-[61px] h-[50px]'/> 
          <h3 className='text-[20px] font-[400] tracking-[1%]'>سهولة الاستخدام</h3>
          <p className='text-[#646464] text-[14px] leading-[25px] font-[400]'>صممنا التطبيق بطريقة بسيطة وسلسة، تقدر تحجز وتتابع كل حاجة بخطوات قليلة ومن غير أي تعقيد، حتى لو أول مرة تستخدمه.</p>
      </div>
    </>
  )
}