import React from "react";
import * as motion from "motion/react-client"; 



const techStack = [
  "Next.js",
  "Node.js",
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS",
  "Express.js",
  "FramerMotion",
  "Vercel",
  "Git",
  "GitHub",
  "ThunderClient",
];
const Skills = () => {
  return (
    <div className=" px-4 py-20">
      <div className="absolute ">
        <p className="text-[16px] lg:text-[20px] font-inter-semibold ">{"[TECHSTACK]"}</p>
      </div>
      <div className="flex flex-wrap gap-4 lg:gap-8 px-2 mt-20 items-center">
        {techStack.map((items, i) => (
          <motion.p 
          initial={{ opacity: 0, scale:0.8 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
          className="px-2 lg:px-3 lg:scale-115 bg-white border-1 rounded-[20px] cursor-pointer" key={i}>
            {items}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
