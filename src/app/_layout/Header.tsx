"use client"
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {

  const [menu, setMenu] = useState(false)
  return (
    <>
        <nav className="flex px-4 py-4 font-semibold w-full items-center justify-between text-gray-900 bg-white/95 lg:bg-white/60 lg:backdrop-blur-xl fixed z-2  ">
          <a href="#home">{'<achxu>'}</a>          
          <div className="hidden sm:flex gap-5 ">
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>
          <p className="text-[20px] px-2  sm:hidden" onClick={() => setMenu(!menu)} >=</p>
          {menu && (
            <div className=" text-xl fixed inset-0  w-full flex z-10  right-2 bg-white">

            <div className="w-full h-full px-4 py-18 
             ">
              <div className="flex flex-col justify-center  gap-4 py-20 w-full font-inter-semibold">
                <a href="#work" onClick={()=>setMenu(!menu)}>WORK</a>
                <a href="#about" onClick={()=>setMenu(!menu)}>ABOUT</a>
                <a href="#contact" onClick={()=>setMenu(!menu)}>CONTACT</a>
              </div>

              <div className="flex flex-col gap-2 text-[18px]  text-gray-500  ">
                <Link href={'https://drive.google.com/file/d/1oz2abTUjmLYSN9YLkFs4gUh5YilS2sF-/view?usp=drive_link'} className="hover:text-violet-600 underline">get my resume here</Link>
                <Link href={'https://github.com/achxu-28'} className="hover:text-violet-600 underline">Github</Link>
              </div>

              <div className="size-[2rem] absolute right-6 top-6 text-black hover:text-gray-600">
                <p onClick={() => setMenu(!menu)} className="size-[1.7rem]">X</p>
              </div>
            </div>
          </div>
          )}
        </nav>
        
    </>
  );
};

export default Header;
