import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="grid grid-cols-8 gap-11 my-5 ml-10">
                <Image className='col-span-2' src="/logo.png" width={30} height={30} alt='logo'/>
                <Link className='col-span-1' href={"/"}>HOME</Link>
                <Link className='col-span-1' href={"/about"}>RECIPE</Link>
                <Link className='col-span-1 ' href={"/categorles"}>CATEGORLES</Link>
                <div className='col-span-2 w-full h-fit bg-[#EFBD4C] rounded-lg'><i className="fa-solid fa-magnifying-glass text-slate-50 pl-44"></i></div>
                <i className="fa-solid fa-user w-fit  p-2 rounded-full bg-[#EFBD4C] text-slate-50 col-span-1"></i>
            
            
            </div> 
            <div className="">{children}</div> 
        </>

    )
}