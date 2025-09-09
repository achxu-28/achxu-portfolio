"use client"
import React from 'react'
import  {motion, useScroll, useTransform} from "motion/react"; 


const Contact = () => {
    const {scrollY} = useScroll()

    const y = useTransform(scrollY, [2000,2500], [-1000,200])
  return (
    <div className='h-[90vh] relative' id='contact'>

      <div className='flex flex-col md:flex-row md:justify-end '>
          <div className='relative pt-40 pb-20 flex px-4 w-full md:justify-end'>
            <div className='absolute top-20 lg:top-38 left-4'>
                <h3 className='font-inter-semibold lg:text-[20px]'>{'[CONTACT]'}</h3>
            </div>
            <div className='flex flex-col pr-20'>
                <p>EMAIL</p>
                <p>WHATSAPP</p>
            </div>
            <div className='flex flex-col pr-20'>
                <p>INSTAGRAM</p>
                <p>LINKEDIN</p>
                <p>GITHUB</p>
                <p>RESUME</p>
            </div>
          </div>
    
          <form action="" className='px-4 md:px-0 md:pr-4 flex gap-1 h-fit  md:pt-40'>
            <input type="text" name="" placeholder='leave a message...' id="" className='
            border-1 px-2' />
            <button className='text-[white] bg-black px-2 py-2'>send</button>
          </form>
      </div>

      

      <motion.div 
      style={{y}}
      className='px-4 '>
        <h2 className='text-[90px] md:text-[120px] lg:text-[180px] text-center sticky bottom-0'>ACHXU</h2>
      </motion.div>

      <div className='pt-20 px-4'>
        <p>@2025</p>
      </div>

    </div>
  )
}

export default Contact
