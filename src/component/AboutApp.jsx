import React from 'react'
import Hero2 from "../assets/images/Hero2.svg"

export default function AboutApp() {
  return (
    <div className='px-[20px] lg:px-[80px] flex flex-col-reverse mt-[40px] lg:mt-[0px]  lg:flex-row items-center lg:gap-[150px]'>
      <img src={Hero2} className='w-[600px]' />
      <div className='flex flex-col gap-[20px]'>
        <h3 className='font-[400] text-[24px]  text-main '>عن التطبيق</h3>
        <h1 className='font-[700] lg:text-[32px] text-[26px] leading-[34.19px] text-[#F3BB44]'>تعرف أكثر عن تطبيق <span className='text-main'>خدمتك</span></h1>
        <p className='text-[20px] leading-[37px] font-[400]'>تطبيقنا هو منصة ذكية تجمع بين المستخدمين الباحثين عن خدمات منزلية موثوقة، ومقدمي الخدمات المحترفين في مجالات مثل التنظيف، السباكة، الصيانة والطلاء. نسهل عليك عملية الحجز بخطوات بسيطة وسريعة، حيث يمكنك استعراض مقدمي الخدمات، قراءة التقييمات، ومتابعة تنفيذ الخدمة من البداية للنهاية. وفي نفس الوقت، نتيح لمقدمي الخدمات فرصة لعرض مهاراتهم والوصول إلى عدد أكبر من العملاء، وتحقيق دخل ثابت من خلال نظام عادل وشفاف. كل هذا في تجربة استخدام سلسة، آمنة، وسريعة مصممة لتخدم الطرفين بكل احترافية.</p>
      </div>
    </div>
  )
}
