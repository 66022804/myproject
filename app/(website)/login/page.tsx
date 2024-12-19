import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center ml-64 mt-5">
      <Image
        className="absolute top-0 left-0 -z-10"
        src="/l.png"
        alt="logo"
        layout="intrinsic"
        width={300}
        height={250}
        objectFit="contain"
      />
      <h1 className="text-shadow-xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB100] to-[#FFE6AD]">Welcome Back!</h1>
      <div className="flex items-center mt-5">
        <p className="text-xl text-[#FFC94E] ">Don’t have an account?</p>
        <Link className="ml-2 text-xl font-bold text-[#A97500] underline decoration-[#A97500] hover:text-[#FFB100] hover:decoration-[#FFB100]" href="/singup"> Sign Up </Link>
      </div>

     
    {/* Email input */}
    <div className="my-4 w-full max-w-[300px]">
      <label htmlFor="email" className="block text-sm font-medium text-[#A97500] "></label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        className="mt-1 block w-full px-4 py-1 border-2 border-[#FFC84B] bg-[#FFE6AD] text-[#A97500] focus:ring-[#FFE6AD] hover:bg-[#FFECC1] hover:border-[#FEFEFE] rounded-md shadow-sm focus:outline-none focus:ring-2 " 
        placeholder="Enter your email" 
        required
      />
    </div>

    {/* Password input */}
    <div className="mb-5  w-full max-w-[300px]">
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

    <div className="flex justify-center  mr-32 mb-4">
        <Link className="text-sm font-bold text-[#A97500] hover:text-[#FFB100] cursor-pointer "  href="/recovery">Forgot your password?</Link>
    </div>

     <div className="flex items-center my-2 w-full justify-center">
       <hr className="border-t-2 border-[#FFB100] max-w-[100px] w-full" />
       <span className="text-[#FFB100] mx-4">OR</span>
       <hr className="border-t-2 border-[#FFB100] max-w-[100px] w-full" />
      </div>

      <div className="flex items-center w-full justify-center mt-4">
       <i className="fa-brands fa-google text-3xl mr-10"></i>
       <i className="fa-brands fa-facebook text-3xl mr-10"></i>
       <i className="fa-brands fa-apple text-3xl"></i>
      </div>

      <div className='flex items-center justify-center w-full max-w-[300px] mt-6'>
        <Link className='w-full border-2 border-[#FFECC1] bg-[#EFBD4C] text-[#fbfbfb] hover:text-[#FFB100] hover:bg-[#FFECC1] hover:border-[#EFBD4C] active:bg-[#F8F8F8] rounded-xl py-1 text-center'href="/">
        Sing in</Link>
      </div>
    </div>
  )
}

