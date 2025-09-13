// src/components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import LightMode from "../icons/LightMode";
import NightMode from "../icons/NightMode";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { isLight, toggle } = useTheme();

  return (
    <div className={isLight ? "text-black" : "text-white"}>
      <nav
        className={`flex px-4 py-4 font-semibold w-full items-center justify-between lg:backdrop-blur-xl fixed z-2 ${
          isLight
            ? "bg-white/95 lg:bg-white/60"
            : "bg-black/95 lg:bg-black/60"
        }`}
      >
        <div className="flex gap-2">
          <a href="#home">{`<achxu>`}</a>
          <button onClick={toggle} className="size-6">
            {isLight ? <LightMode /> : <NightMode />}
          </button>
        </div>

        <div className="hidden sm:flex gap-5">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>

        <p
          className="text-[20px] px-2 sm:hidden"
          onClick={() => setMenu((m) => !m)}
        >
          =
        </p>

        {menu && (
          <div
            className={`text-xl fixed inset-0 w-full flex z-10 right-2 ${
              isLight ? "bg-white" : "bg-black"
            }`}
          >
            <div className="w-full h-full px-4 py-18">
              <div className="flex flex-col justify-center gap-4 py-20 w-full font-inter-semibold">
                <a href="#work" onClick={() => setMenu(false)}>
                  WORK
                </a>
                <a href="#about" onClick={() => setMenu(false)}>
                  ABOUT
                </a>
                <a href="#contact" onClick={() => setMenu(false)}>
                  CONTACT
                </a>
              </div>

              <div className="flex flex-col gap-2 text-[18px] text-gray-500">
                <Link
                  href="https://drive.google.com/file/d/1oz2abTUjmLYSN9YLkFs4gUh5YilS2sF-/view?usp=drive_link"
                  className="hover:text-violet-600 underline"
                >
                  get my resume here
                </Link>
                <Link
                  href="https://github.com/achxu-28"
                  className="hover:text-violet-600 underline"
                >
                  Github
                </Link>
              </div>

              <div className="size-[2rem] absolute right-6 top-6 hover:text-gray-600">
                <p onClick={() => setMenu(false)} className="size-[1.7rem]">
                  X
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;