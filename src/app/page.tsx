// import Image from "next/image";
// import ssi from "../../public/images/vintage-abstract-black-white-wave-background-free-video.jpg";

import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";



export default function Home() {
  return (
    <>
      <div className="flex flex-col relative top-17 font-inter">
        
      {/* <Header/> */}
      {/* <Checkered/> */}
      {/* <Header/> */}

      <HomePage/>
      <Skills/> 
      <About/>
      <Contact/>
      {/* <WorkSection/> */}
       
      </div>
    </>
  );
}
