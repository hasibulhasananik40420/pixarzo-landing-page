/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import headerImage from "@/assets/Header/header.png"

const Header = () => {
  return (
    <section className="bg-PrimaryColor px-3 py-[52px]">
        <div className="lg:flex items-center gap-[61px] max-w-[1360px] mx-auto">
             {/************* header text part start here *************/}
           <div className="lg:w-[648px] w-full">
             <h1 className="text-white lg:text-[67px] md:text-[77px] md:leading-[110px] text-[46px] leading-[70px] font-bold lg:leading-[82px]">We're an <span className="#47BDFF">Creative</span> Digital Agency</h1>
              <p className="text-white text-[24px] font-medium leading-[36px] mt-6">We believe we help you grow your business to the next level with a better experience</p>

              <span className="flex gap-4 mt-[48px]">
              <button className="bg-ButtonColor w-[169px] h-[56px] rounded-[37px] text-white text-[18px] font-bold leading-6 tracking-[0.09px]">Get Started</button>

              <button className="bg-[#333156] w-[163px] h-[56px] rounded-[37px] text-white text-[18px] font-bold leading-6 tracking-[0.09px]">Contact Us</button>
              </span>
           </div>
            {/************* image part start here *************/}
            <div>
               <Image className="mt-16 md:mt-16 lg:mt-0" src={headerImage} alt="" width={650} height={600} />
            </div>
        </div>
    </section>
  )
}

export default Header