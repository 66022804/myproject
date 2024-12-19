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
      <h1 className="text-shadow-xl text-4xl font-bold ml-16 text-transparent bg-clip-text bg-gradient-to-r from-[#FFB100] to-[#FFE6AD]">Reset your password</h1>
      <div className="flex items-center mt-5">
        <p className="text-xl text-[#FFC94E] mb-6 ">Please enter your new password</p>
      </div>

     
    {/* Password input */}
    <div className="mb-5 w-full max-w-[300px]">
      <label htmlFor="password" className="block text-sm font-medium text-[#A97500]"></label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        className="mt-1 block w-full px-4 py-1 border-2 border-[#FFC84B] bg-[#FFE6AD] text-[#A97500] focus:ring-[#FFE6AD] hover:bg-[#FFECC1] hover:border-[#FEFEFE] rounded-md shadow-sm focus:outline-none focus:ring-2 " 
        placeholder="Enter your password" 
        required
      />
    </div>

   <div className="space-y-2 ml-20">
  <div className="flex items-center">
    <i className="fa-solid fa-check border-2 text-[#FFFFFF]  border-[#EFBD4C] bg-[#EFBD4C] p-1 mr-2 rounded-full w-6 h-6 flex items-center justify-center text-sm"></i>
    <p className='text-[#A97500]'> Your Password must contain: At least 6 characters</p>
  </div>
  <div className="flex items-center">
    <i className="fa-solid fa-check border-2  border-[#C8C1B0] bg-[#C8C1B0] text-[#FFFFFF]  p-1 mr-2 rounded-full w-6 h-6 flex items-center justify-center text-sm"></i>
    <p className='text-[#A97500]'>Contains a number</p>
  </div>
</div>




      <div className='flex items-center justify-center w-full max-w-[300px] mt-10'>
        <Link className='w-full border-2 border-[#FFECC1] bg-[#EFBD4C] text-[#fbfbfb] hover:text-[#FFB100] hover:bg-[#FFECC1] hover:border-[#EFBD4C] active:bg-[#F8F8F8]  rounded-xl py-1 text-center'href="/">
        Done</Link>
      </div>
    </div>
  )
}

