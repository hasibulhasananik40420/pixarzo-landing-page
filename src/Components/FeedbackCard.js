/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from 'next/image';
import quote from '@/assets/Feedback/quote 1.png';
import image1 from '@/assets/Feedback/image1.png';
import image2 from '@/assets/Feedback/image2.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FeedbackCard = () => {
 
  return (
    <>
      {/************** Feedback card start 1 here *****************/}
      <div className='xl:w-[424px] lg:w-[380px] w-full bg-[#F7F8FA]'>
        <div className='p-6'>
          <Image src={quote} alt='' width={48} height={48} />
          <h1 className='mt-6 text-[#28264D] text-[24px] font-bold leading-8 '>The Experience was Unique</h1>
          <p className='mt-6 text-[#69778C] text-[18px] font-normal leading-8 '>
            I have worked with many web designers in the past and I can say that I have never had an experience like this. I have been working with Figma for a few months now and it has been a unique experience.
          </p>

          <span className='mt-12 flex items-center relative'>
            <Image className='w-[110px] h-[110px] z-30' src={image1} alt='' height={110} width={110} />
            <p className='bg-[#00AEEF] w-[105px] h-[56px] ml-[-45px]' style={{ borderRadius: '0px 40px 40px 0px' }}></p>
          </span>

          <h1 className='mt-6 text-[#28264D] text-[24px] font-bold leading-8 '>Courtney Henry</h1>
          <p className='text-[#F25260] text-[14px] font-normal leading-6'>Head of Design, Gillette</p>
        </div>
      </div>

      {/************** Feedback card start 2 here *****************/}
      <div className='xl:w-[424px] lg:w-[380px] w-full bg-[#F7F8FA]'>
        <div className='p-6'>
          <Image src={quote} alt='' width={48} height={48} />
          <h1 className='mt-6 text-[#28264D] text-[24px] font-bold leading-8 '>"The support is awesome"</h1>
          <p className='mt-6 text-[#69778C] text-[18px] font-normal leading-8 '>
            I would like to recommend the website design services of the talented Figma. I had the distinct pleasure of working with their team to build my new website. T
          </p>

          <span className='mt-20 flex items-center relative'>
            <Image className='w-[110px] h-[110px] z-30' src={image2} alt='' height={110} width={110} />
            <p className='bg-[#00AEEF] w-[105px] h-[56px] ml-[-45px]' style={{ borderRadius: '0px 40px 40px 0px' }}></p>
          </span>

          <h1 className='mt-6 text-[#28264D] text-[24px] font-bold leading-8 '>Ronald Richards</h1>
          <p className='text-[#F25260] text-[14px] font-normal leading-6'>COO, Nintendo</p>
        </div>
      </div>

      {/************** Feedback card start 3 here *****************/}
      <div className='xl:w-[424px] lg:w-[380px] w-full bg-[#F7F8FA]'>
        <div className='p-6'>
          <Image src={quote} alt='' width={48} height={48} />
          <h1 className='mt-6 text-[#28264D] text-[24px] font-bold leading-8 '>They were professional, meticulous and organized</h1>
          <p className='mt-6 text-[#69778C] text-[18px] font-normal leading-8 '>
            I am thinking about starting a business in mobile app design. came across this website and thought this would be a great place to start.
          </p>

          <span className='mt-12 flex items-center relative'>
            <Image className='w-[110px] h-[110px] z-30' src={image1} alt='' height={110} width={110} />
            <p className='bg-[#00AEEF] w-[105px] h-[56px] ml-[-45px]' style={{ borderRadius: '0px 40px 40px 0px' }}></p>
          </span>

          <h1 className='mt-6 text-[#28264D] text-[24px] font-bold leading-8 '>Qualty Hanrik</h1>
          <p className='text-[#F25260] text-[14px] font-normal leading-6'>Ceo of Design, Gillette</p>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
