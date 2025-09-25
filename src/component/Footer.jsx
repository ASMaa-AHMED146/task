import React from 'react'
import Logo from "../assets/images/Footer.svg"
import Facebook from "../assets/images/facebook.svg"
import Instgram from "../assets/images/instagram.svg"
import Twitter from "../assets/images/TwitterX.svg"

export default function Footer() {
  return (
    <footer className='bg-main text-white flex flex-col md:flex-row  gap-[20px] lg:gap-[0px] justify-between items-center py-[10px]  lg:px-[50px] px-[10px]'>
      <div className='flex items-center gap-[15px]'>
        <img  src={Logo} className='w-[50px]'/>
        <p className='text-[24px]'>خـدمتـك</p>
      </div>
      <div>
        <div className='flex gap-[10px] justify-center'>
          <Icon icon={Facebook}/>
          <Icon icon={Instgram}/>
          <Icon icon={Twitter}/>
        </div>
        <p>صنع بكل حب ❤️ في معامل جدارة</p>
      </div>
      <p>جميع الحقوق محفوظة لشركة خدمتك</p>
    </footer>
  )
}
function Icon({icon})
{
  return(
    <>
      <div className='w-[30px] h-[30px] p-[10px] bg-white text-red-400 rounded-[100%] items-center justify-center cursor-pointer '>
          <img className='text-main w-[25px]' src={icon} alt="socail media" />
      </div>
    </>
  )
}
