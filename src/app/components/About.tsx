import Image from "next/image";
import myPic from "../../../public/images/me.jpg";
import React from "react";
import LinkedIn from "../icons/LinkedIn";
import Resume from "../icons/Resume";
import Insta from "../icons/Insta";
import GitIcon from "../icons/GitIcon";
import * as motion from "motion/react-client"; 
import Link from "next/link";

const About = () => {
  return (
    <div className="lg:h-[100vh] flex" id="about">
        {/* image side */}
        <motion.div 
        initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-300 h-[100vh]  hidden lg:block py-20 pl-4 pr-10">
            <Image
              src={myPic}
              alt="img not found"
              className="object-cover h-full rounded-[30px] grayscale"
            />
        </motion.div>

        {/* section side */}
      <div className="flex flex-col px-4 lg:pl-20 relative py-20 ">
        <div className="absolute">
          <h2 className="text-[16px] lg:text-[20px] font-inter-semibold top-2 lg:top-3 absolute ">{"[ABOUT]"}</h2>
        </div>

        <div>
          <motion.p
          initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
          className="indent-30 lg:indent-40 text-[30px] xl:text-[40px] font-inter-semibold  ">
            {
              "Hi, I'm Achu. Actually my real name is Akash Mamenholy ('mae-man-njo-lee'). I bring ideas to life with modern web technologies."
            }
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row xl:ml-[20vh] lg:h-full overflow-hidden">
                    {/* coloumn 1 */}
            <div className="flex flex-col h-full justify-between">
                <motion.div
                initial={{ opacity: 0, x:100 }}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col py-10  text-[15px] xl:text-[16px] xl:mt-10">
                  <h3 className="text-[16px] font-inter-semibold pb-2">MY LIFE</h3>
                  <p className="text-gray-500 ">
                    {
                      "I'm born in 2002. I live in Kerala, India. I'm a guy. I love pizzas. I code when I'm bored. I read often.  I'm cool."
                    }
                  </p>
                </motion.div>
                <div className="flex gap-3 text-gray-500">
                  <Link href={'https://www.instagram.com/achxu_/'} className="border-1 p-2 rounded-full h-15 w-15 flex justify-center items-center hover:bg-[#afadad80] transition-all duration-200">
                    <Insta className="size-10 hover:scale-105 transition-all duration-200"/>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/akash-mamenholy-275b37353'} className="border-1 p-2 rounded-full h-15 w-15 flex justify-center items-center hover:bg-[#afadad80] transition-all duration-200">
                    <LinkedIn className="size-15 hover:scale-105 transition-all duration-200"/>
                  </Link>
                  <Link href={'https://github.com/achxu-28'} className="border-1 p-2 rounded-full h-15 w-15 flex justify-center items-center hover:bg-[#afadad80] transition-all duration-200">
                    <GitIcon className="size-15 hover:scale-105 transition-all duration-200"/>
                  </Link>
                  <Link href={'https://drive.google.com/file/d/1oz2abTUjmLYSN9YLkFs4gUh5YilS2sF-/view?usp=drive_link'} className="border-1 p-2 rounded-full h-15 w-15 flex justify-center items-center hover:bg-[#afadad80] transition-all duration-200">
                    <Resume className="size-15 hover:scale-105 transition-all duration-200"/>
                  </Link>
                </div>
            </div>
                    {/* coloumn 2 */}
            <div className="flex flex-col justify-between lg:pl-2 ">
                <motion.div 
                initial={{ opacity: 0, x:100 }}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="flex flex-col py-10  text-[15px] xl:text-[16px] xl:mt-10">
                  <h3 className="text-[16px] font-inter-semibold pb-2">VISION</h3>
                  <p className="text-gray-500">
                    I believe in building websites that are not only functional but
                    also beautiful and intuitive. My approach is guided by these three
                    pillars:
                  </p>
                  <ul className=" list-inside flex gap-3 text-gray-500">
                    <li>-Usability</li>
                    <li>-Aesthetics</li>
                    <li>-Performance</li>
                  </ul>
                </motion.div>
        
                 <div className="flex  gap-[2px] text-[20px]">
                        <Link href={"mailto:akashmamenholy@gmail.com"} className=" flex  gap-[2px]">
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

      </div>
    </div>
  );
};

export default About;
