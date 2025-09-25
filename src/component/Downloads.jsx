import React from 'react'
import Top1 from "../assets/images/Top1.svg"
import Phones from "../assets/images/lastSection.png"
import App from "../assets/images/latApp.svg"
import Google from "../assets/images/lastGoogle.svg"

export default function Downloads() {
  return (
          <div className="bg-[#FFB351] relative  rounded-[26px] flex h-[700px] my-[50px] lg:mt-[150px] lg:mb-[100px] lg:h-[511px] ">
            <div className="lg:py-[20px] lg:pr-[50px] py-[50px] px-[20px]   flex flex-col lg:justify-center lg:gap-[50px] gap-[20px]  md:mt-[80px] md:px-[40px]">
                <h1 className="lg:font-[700] lg:text-[64px] text-[30px] font-[400] md:text-[35px] ">قم بتحميل التطبيق</h1>
                <p className="lg:font-[400] lg:text-[24px] lg:leading-[100%] text-[20px] leading-[30px] ">التطبيق متوفر الآن علي جميع منصات التحميل جوجل بلاي و آب استور !</p>
                <div className="flex items-center justify-center gap-[15px] ">
                  <img className="cursor-pointer w-[150px]" src={Google} alt="" />
                  <img className="cursor-pointer w-[150px]" src={App} alt="" />
                </div>
            </div> 
            <img className="  absolute bottom-[10px] left-[15px] lg:top-[-98.82px] lg:left-[74px] max-lg:w-[350px] max-md:w-[300px]" src={Phones} alt="phone photo" />
            <div className='absolute w-full h-[100%] top-0 right-0 bg-transparent overflow-hidden'>
            <img className="absolute bottom-[10px] right-[60px]  z-100 md:bottom-[10px] md:right-[370px] rotate-240  lg:bottom-[0px] lg:right-[850px] lg:rotate-180 md:w-[273.16px] w-[200px] h-[200px] md:h-[273.16px] " src={Top1}/>
            <img className="absolute  z-0 w-[273.16px] h-[273.16px]  top-[-110px] right-[-90px] " src={Top1}/>
            <img className="absolute  z-0 top-[-100px] left-[-100px] rotate-270 " src={Top1}/>
            </div>
          </div>
  )
}
