import React from 'react'
import Arrow from "../assets/images/Arrow Wiggle Long.svg"
import Phone from "../assets/images/mobile-phone-transfer-svgrepo-com.svg"

export default function About() {
  return (
    <div className='relative h-[1500px] lg:h-[600px]  lg:p-[50px] bg-[#f3bc44b2] lg:bg-transparent flex '>
      <div className='absolute lg:bg-[#f3bc44b2]   w-full z-0 top-0 left-0 h-[80%] lg:h-[80%]'></div>
      <div className='text flex flex-col lg:flex-row justify-between   absolute z-100'>
          <div className=' flex lg:pr-[50px] relative p-[30px]'>
            <p className='font-[700] text-[35px] lg:text-[48px] text-main lg:pt-[50px]'>مميزات التطبيق</p>
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
      <div className='flex flex-col gap-[10px] lg:max-w-[300px] border-[1px] border-[#267FD0] p-[15px] bg-white rounded-[20px]'>
          <img src={Phone} className='w-[50px]'/>
          <h3 className='text-[20px] '>سهولة الاستخدام</h3>
          <p className='text-[#646464] text-[14px] leading-[20px] font-[400]'>صممنا التطبيق بطريقة بسيطة وسلسة، تقدر تحجز وتتابع كل حاجة بخطوات قليلة ومن غير أي تعقيد، حتى لو أول مرة تستخدمه.</p>
      </div>
    </>
  )
}