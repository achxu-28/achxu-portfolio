"use client"
import Image from "next/image";
import Image1 from "../../../public/images/me2.jpg";
import Fredo from "../../../public/images/fredoFront.jpg";
import Portfolio from "../../../public/images/portfolioFront.jpg";
import Mentogram from "../../../public/images/mentogram.jpg";
import Optics from "../../../public/images/emraitesOpticals.jpg";

import { motion, useTransform } from "motion/react";

const projects = [
  {
    name: "Fredo",
    type: "— E-Commerce Website",
    image: Fredo,
    techStack: ["Nextjs", "MongoDB", "Node.js", "Tailwind"],
    link: "/",
  },
  {
    name: "AkashMamenholy",
    type: "— Personal Portfolio",
    image: Portfolio,
    techStack: ["Nextjs", "MongoDB", "Node.js", "Tailwind"],
    link: "/",
  },
  {
    name: "Mentogram",
    type: "— Mentorship Platform",
    image: Mentogram,
    techStack: ["Nextjs", "MongoDB", "Node.js", "Tailwind"],
    link: "/",
  },
  {
    name: "Generate",
    type: "— Ai Text generator",
    image: Optics,
    techStack: ["Nextjs", "MongoDB", "Node.js", "Tailwind"],
    link: "/",
  },
];

import React from "react";
import Link from "next/link";
import { useScroll } from "motion/react";

const HomePage = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 400], [1,0.9] );

  const background = useTransform(scrollY, [0, 400], ["#ffffff", "#afadad"]);

  // console.table(projects);
  return (
    <motion.div
    style={{background}}
    className="bg-[#fff]" id="home">
      {/* home page  */}
      <motion.div
      style={{scale}} className="flex bg-transparent flex-col lg:flex-row h-[90vh] lg:h-[100vh] justify-between sticky top-17">
        <motion.div
        initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-[90px] lg:text-[190px] font-inter-semibold flex lg:items-end justify-center pb-4 ">
          <h1>ACHXU</h1>
        </motion.div>

        <div className="  flex flex-col h-full justify-between">
          <motion.div
          initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
          className="lg:absolute lg:h-100 lg:w-fit lg:top-0 lg:right-[50vh] pr-10 py-30 lg:pt-50 px-4 text-[24px]">
            <p className=" lg:text-[35px]">Mern Stack Developer</p>
            <p className=" lg:text-[35px]">Scalable Web Applications</p>
            <p className=" lg:text-[28px] text-gray-500 text-[18px]">
              Crafting modern, aesthetic websites
            </p>
          </motion.div>

          <div className="flex  lg:h-full pb-20 justify-between pl-4  lg:flex-col-reverse lg:px-4">
            <div className=" pr-2 grid justify-center lg:justify-start ">
              <Image
                src={Image1}
                alt="img not found"
                className="object-cover rounded-full h-[80px] w-[80px] lg:h-[140px] lg:w-[140px]"
              />
            </div>

            <div className=" items  pr-4  space-y-2 lg:mt-[38vh] z-2">
              <div className="text-gray-500 italic">
                *wanna discuss your project?
              </div>

                <Link href={"mailto:akashmamenholy@gmail.com"} className="flex  gap-[2px] text-[20px]">
                  <button className="text-gray-100  bg-gray-950 pl-2 pr-6 py-2">
                    connect with me
                  </button>
                  <button className="text-gray-100  bg-gray-950 pl-3 pr-3 py-2">
                    {"->"}
                  </button>
                </Link>

            </div>
          </div>
        </div>
      </motion.div>

      {/* work section  */}
      <div className=" sticky top-17 bg-white" id="work">
        <div className=" px-4  py-20 lg:pt-40 gap-2 flex relative">
          <div className="  w-fit h-fit absolute top-22 lg:top-45">
            <h2 className="text-[16px] lg:text-[20px] font-inter-semibold ">
              {"[WORK]"}
            </h2>
          </div>
          <motion.p
          initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-[30px] lg:text-[50px] font-inter-semibold indent-30 lg:indent-60 flex ">
            As a MERN Stack developer, I build responsive, user-friendly web
            applications that balance performance with clean design.
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-4 lg:mx-5 border-t border-dashed border-gray-300 py-10 gap-5">
          {/* projects */}
          <div className="absolute flex justify-center -top-3 w-full">
            <p className=" px-2 rounded-[20px] bg-gray-300">TAP FOR REPOS</p>
          </div>

          {projects.map((items, i) => (
            <motion.div
            initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid col-span-1  lg:pb-4" key={i}>
              <Link
                href={items.link}
                className="w-full min-h-90 lg:min-h-120 relative overflow-hidden"
              >
                <Image
                  src={items.image}
                  alt=""
                  className="object-cover h-full hover:scale-110 transition-transform duration-200"
                />
                <div className="absolute flex px-2 flex-wrap gap-3 bottom-2 w-full">
                  <p className="bg-gray-100/80 border-1 border-gray-500 px-2 rounded-[20px]">
                    {items.techStack}
                  </p>
                </div>
              </Link>
              <p className="pt-1 text-[16px] lg:text-[18px] ">
                {items.name} <span className="text-gray-500">{items.type}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
