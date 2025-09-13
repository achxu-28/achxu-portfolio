// import Image from "next/image";
// import ssi from "../../public/images/vintage-abstract-black-white-wave-background-free-video.jpg";

import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";

import Head from "next/head";

<Head>
  <link rel="canonical" href="https://achxu-portfolio.vercel.app/" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Akash Mamenholy",
      url: "https://achxu-portfolio.vercel.app/",
      sameAs: [
        "https://github.com/achxu",
        "https://www.linkedin.com/in/akash-mamenholy-275b37353",
      ],
      jobTitle: "Frontend Developer",
    })}
  </script>
</Head>






export default function Home() {
  return (
    <>
      <div className="flex flex-col relative top-15 font-inter ">
        
      {/* <Header/> */}
      {/* <Checkered/> */}
      {/* <Header/> */}

      <HomePage/>
      <Skills/> 
      <About/>
      <Contact/>
      {/* <WorkSection/> */}
       
       {/* <RockPaperScissorsPage/> */}
      </div>
    </>
  );
}
