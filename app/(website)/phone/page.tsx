import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center ml-64 mt-10">
      <Image
        className="absolute top-0 left-0 -z-10"
        src="/l.png"
        alt="logo"
        layout="intrinsic"
        width={300}
        height={250}
        objectFit="contain"
      />
      <h1 className="text-shadow-xl text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#FFB100] to-[#FFE6AD]">Check your phone</h1>
      <div className="flex items-center mt-5">
        <p className="text-xl text-[#FFC94E] ">We’ve sent the code to your phone</p>
      </div>

      {/* Input Grid */}
<div className="grid grid-cols-10  ml-[500px] w-full h-12 m-8">
  {/* First input */}
  <div className="relative w-fit h-full">
    <input
      maxLength={1}
      className="border-2 w-12 min-h-full rounded-md border-[#c2c2c2] shadow-inner text-[20px] text-center"
      type="text"
    />
    <div className="absolute w-full px-3 bottom-2 -translate-x-1/2 left-1/2">
      <div className="h-[1px] bg-[#606060] w-full"></div>
    </div>
  </div>

  {/* Second input */}
  <div className="relative w-fit h-full">
    <input
      maxLength={1}
      className="border-2 w-12 min-h-full rounded-md border-[#c2c2c2] shadow-inner text-[20px] text-center"
      type="text"
    />
    <div className="absolute w-full px-3 bottom-2 -translate-x-1/2 left-1/2">
      <div className="h-[1px] bg-[#606060] w-full"></div>
    </div>
  </div>

  {/* Third input */}
  <div className="relative w-fit min-h-full">
    <input
      maxLength={1}
      className="border-2 rounded-md border-[#c2c2c2] shadow-inner px-2 text-[20px] text-center w-12 h-full"
      type="text"
    />
    <div className="absolute w-full px-3 bottom-2 -translate-x-1/2 left-1/2">
      <div className="h-[1px] bg-[#606060] w-full"></div>
    </div>
  </div>

  {/* Fourth input */}
  <div className="relative w-fit min-h-full">
    <input
      maxLength={1}
      className="border-2 rounded-md border-[#c2c2c2] shadow-inner px-2 text-[20px] text-center w-12 h-full"
      type="text"
    />
    <div className="absolute w-full px-3 bottom-2 -translate-x-1/2 left-1/2">
      <div className="h-[1px] bg-[#606060] w-full"></div>
    </div>
  </div>
</div>

    
    <div className="flex justify-center mb-5">
        <p className="text-sm font-bold text-[#A97500]  ">Code expires in : 03.12</p>
    </div>

     


      <div className='flex items-center justify-center w-full max-w-[300px]'>
        <Link className='w-full border-2 border-[#FFECC1] bg-[#EFBD4C] text-[#fbfbfb] hover:text-[#FFB100] hover:bg-[#FFECC1] hover:border-[#EFBD4C] active:bg-[#F8F8F8] rounded-xl py-1 text-center'href="/">
        verify</Link>
      </div>

        <div className='flex items-center justify-center w-full max-w-[300px] mt-5'>
        <Link className='w-full border-2 border-[#EFBD4C] bg-[#FFECC1] text-[#FFB100] hover:text-[#fbfbfb] hover:bg-[#EFBD4C] hover:border-[#FFECC1] active:bg-[#FFB100] rounded-xl py-1 text-center'href="/">
        Send again</Link>
      </div>
    </div>
  )
}

