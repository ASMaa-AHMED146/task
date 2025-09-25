import React from 'react'
import Logo from "../assets/images/Footer.svg"
import Facebook from "../assets/images/facebook.svg"
import Instgram from "../assets/images/instagram.svg"
import Twitter from "../assets/images/TwitterX.svg"

export default function Footer() {
  return (
<div className='relative bg-[#267ed0]'>
      <footer className='text-white  flex flex-col md:flex-row  gap-[20px] lg:gap-[0px] justify-between items-center py-[10px]  lg:px-[50px] px-[10px]'>
      <div className='flex items-center gap-[15px]'>
        <img  src={Logo} className='w-[50px]'/>
        <p className='text-[24px] font-[700] leading-1.5'>خـدمتـك</p>
      </div>
      <div>
        <div className='flex gap-[10px] justify-center '>
          <Icon icon={Facebook}/>
          <Icon icon={Instgram}/>
          <Icon icon={Twitter}/>
        </div>
        <p className='text-[14px] foxt-[400] leading-1.5 mt-[10px]'>صنع بكل حب ❤️ في معامل جدارة</p>
      </div>
      <p className='font-[400] text-[12px] leading-[18px]'>جميع الحقوق محفوظة لشركة خدمتك</p>
      
    </footer>
    <img src={Logo} className='w-[100px] h-[100%] z-[0] opacity-10 absolute top-0 left-0' alt="hidden logo" />
</div>
  )
}
function Icon({icon})
{
  return(
    <>
      <div className='w-[32px] h-[32px] p-[10px] bg-white text-red-400 rounded-[100%] items-center justify-center cursor-pointer '>
          <img className='text-main w-[10px]' src={icon} alt="socail media" />
      </div>
    </>
  )
}
