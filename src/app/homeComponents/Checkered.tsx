import Image from 'next/image'
import Image1 from '../../../public/images/accccheck.png'
import React from 'react'

const Checkered = () => {
  return (
    <div className='h-[90vh] relative'>
      <Image src={Image1} alt='' className='h-full absolute inset-0'/>
        <div className='flex h-full w-full justify-center absolute'>
            <h1 className="text-[clamp(3rem,10vw,6rem)] font-extrabold absolute z-2 font-doto text-center text-[#b10c0c] ">
                  Defining Fashion With Bold Statements!
            </h1>
        </div>
    </div>
  )
}

export default Checkered
