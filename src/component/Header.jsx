import React, { useState, useEffect, useRef } from 'react'
import Logo from "../assets/images/Logo.svg"
import { NavLink, Link } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [open, setopen] = useState(false);
  const postion = useRef(null);
  const menuButtonRef = useRef(null);

  function Closemenu() {
    setopen(false);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        postion.current &&
        !postion.current.contains(e.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target)
      ) {
        Closemenu();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [postion]);

  return (
    <header className='flex py-[0px] px-[15px] pt-[20px] lg:px-[50px] flex-col gap-[15px] lg:gap-[0px] lg:flex-row relative justify-between items-center '>
      <div className='flex justify-between w-[100%] items-center'>
        <Link to={'/'} className='flex gap-[25px] items-center text-[25px] ' >
          <img className='w-[50px]' src={Logo} alt='Logo' />
          <p className='text-main text-[24px] font-[700] leading-normal'>خدمتك</p>
        </Link>
        <nav className='text-[20px] hidden lg:block'>
          <ul className="flex gap-[40px] list-none p-0 m-0">
            <li>
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-main text-[20px] font-[700] no-underline" : "text-black no-underline hover:text-blue-500"}>
                الرئيسيه
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                عن التطبيق
              </NavLink>
            </li>
            <li>
              <NavLink to="/advantge" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                مميزات التطبيق
              </NavLink>
            </li>
            <li>
              <NavLink to="/screens" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                شاشات التطبيق
              </NavLink>
            </li>
            <li>
              <NavLink to="/opinins" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                اراء العملاء
              </NavLink>
            </li>
            <li>
              <NavLink to="/language" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                اللغه
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          ref={menuButtonRef}
          className='lg:hidden cursor-pointer'
          onClick={() => setopen(!open)}
        >
          <HiMenu className='text-[30px] text-[#267FD0]' />
        </div>
      </div>

      {open && (
        <nav className='text-[17px]  w-[100%] left-0 top-[75px] lg:hidden' ref={postion}>
          <ul className="flex flex-col gap-[10px] list-none p-0 m-0  bg-[#267ed03c] px-[15px] py-[15px]">
            <li className='hover:bg-[#267ed03e] p-[10px]' onClick={Closemenu}>
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline hover:text-blue-500"}>
                الرئيسيه
              </NavLink>
            </li>
            <li className='hover:bg-[#267ed03e] p-[10px]' onClick={Closemenu}>
              <NavLink to="/aboutus" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                عن التطبيق
              </NavLink>
            </li>
            <li className='hover:bg-[#267ed03e] p-[10px]' onClick={Closemenu}>
              <NavLink to="/advantge" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                مميزات التطبيق
              </NavLink>
            </li>
            <li className='hover:bg-[#267ed03e] p-[10px]' onClick={Closemenu}>
              <NavLink to="/screens" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                شاشات التطبيق
              </NavLink>
            </li>
            <li className='hover:bg-[#267ed03e] p-[10px]' onClick={Closemenu}>
              <NavLink to="/opinins" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                اراء العملاء
              </NavLink>
            </li>
            <li className='hover:bg-[#267ed03e] p-[10px]' onClick={Closemenu}>
              <NavLink to="/language" className={({ isActive }) =>
                isActive ? "text-main font-[700] no-underline" : "text-black no-underline"}>
                اللغه
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
