'use client';  // เพิ่มบรรทัดนี้สำหรับ Next.js 13+

import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      {/* ครึ่งวงกลมที่อยู่ด้านขวา */}
      <div
  className="rounded-r-full flex items-center justify-center  border-[#FFECC1] bg-[#EFBD4C]   border-2 w-[980px] h-[580px] absolute top-[-30px] right-[750px] z-[-1]"
>
</div>

    <div className="relative grid grid-cols-2 px-20 ">
  {/* รูปภาพ */}
  <Image
    src="/food.png"
    alt="Sample"
    className="object-contain mt-[-80px] "  // เพิ่ม margin-top เพื่อนำรูปภาพขึ้น
    width={400} height={350}
  />

  {/* ข้อความที่อยู่ตรงกลางด้านขวา */}
  <div className="mt-10">
    <div className="text-gray-500 text-lg mb-3">
      Are you looking for a menu
    </div>
    <div className="text-black text-3xl mb-4 font-bold">
      Tteokbokki : 떡볶이
    </div>
    <div className="text-black text-sm md:text-base leading-relaxed max-w-md mb-4">
      Tteokbokki is a popular Korean street food made from soft rice cakes, fish cakes, and a sweet and spicy sauce called gochujang. It's often garnished with boiled eggs, scallions, or sesame seeds. This dish is loved for its chewy texture and bold flavors, making it a favorite comfort food in Korea.
    </div>
    <button className="border-2 border-[#FFECC1] bg-[#EFBD4C] text-[#fbfbfb] hover:text-[#FFB100] hover:bg-[#FFECC1] hover:border-[#EFBD4C] active:bg-[#F8F8F8] text-sm md:text-base py-3 px-10 rounded-3xl  transition-all">
      RECIPE
    </button>
  </div>
</div>


     
    <div className="p-10 mt-16">
      <div className="container">
        <h3 className="text-2xl font-bold  mb-6">
          RECIPES
          <i className="fa-solid fa-plus border-2 text-sm border-[#FFECC1] bg-[#EFBD4C] text-[#fbfbfb] hover:text-[#FFB100] hover:bg-[#FFECC1] hover:border-[#EFBD4C] active:bg-[#F8F8F8] rounded-full p-1.5 "></i>
        </h3>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold text-[#717171]">Japanese Cuisine</h4>
            <i className="fa-solid fa-chevron-right text-xl text-[#717171]"></i>
          </div>

          <div className="grid grid-cols-4 gap-12">
            {/* การ์ดอาหารที่มีเนื้อหา */}
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-[#F8F8F8] border-2 border-[#F3F0F0] p-4 shadow rounded-xl w-full">
                  <Image src="/food.png" alt="Ramen" width={130} height={120} className="mx-auto" />
                  <h5 className="text-lg font-bold my-3 text-center">Ramen ラーメン</h5>
                  <div className="flex justify-between items-center">
                    <i className="fa-solid fa-heart border-2 text-sm border-[#FFECC1] bg-[#EFBD4C] text-[#fbfbfb] hover:text-[#FFB100] hover:bg-[#FFECC1] hover:border-[#EFBD4C] active:bg-[#F8F8F8] rounded-full p-1.5"></i>
                    <button className="border-[#FFECC1] bg-[#EFBD4C] text-[#fbfbfb] hover:text-[#FFB100] hover:bg-[#FFECC1] hover:border-[#EFBD4C] active:bg-[#F8F8F8] border-2 px-4 py-1 rounded-lg">
                      READ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}