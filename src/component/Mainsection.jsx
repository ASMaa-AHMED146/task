import React from 'react'
import Hero from "../assets/images/Hero.svg"
import Appstore from "../assets/images/Appstore.svg"
import Google from "../assets/images/Google.svg"

export default function Mainsection() {
  return (
     <div className='flex px-[20px] lg:px-[80px] mt-[30px] lg:mt-[80px] gap-[50px] flex-col lg:flex-row'>
      <div className='lg:max-w-[60%]  flex flex-col gap-[30px]'>
        <div className='flex flex-col gap-[10px]'>
          <h4 className='text-[#F3BB44] font-[400] text-[24px]'>مرحبا بك في تطبيق</h4>
          <h1 className='text-main font-[700] text-[48px]'>خـدمتـك</h1>
          <p className='py-[20px] text-[20px] font-[400] leading-[37px]'>تطبيق خدمات منزلية متكامل يربطك بأفضل مقدمي الخدمات في منطقتك، سواء كنت تحتاج تنظيف، سباكة، طلاء أو صيانة. احجز بسهولة، وتابع خدمتك خطوة بخطوة. ولو كنت مقدم خدمة، تقدر تنضم وتبدأ تكسب من مهاراتك في أقل من دقيقة.</p>
        </div>
        <div className='flex gap-[20px] justify-center '>
          <img className='cursor-pointer w-[150px]' src={Appstore}/>
          <img className='cursor-pointer w-[150px]' src={Google}/>
        </div>
      </div>
      <div className='m-auto '>
        <img src={Hero} />
      </div>
    </div>
  )
}
