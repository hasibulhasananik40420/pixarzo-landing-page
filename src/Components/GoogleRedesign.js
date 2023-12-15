import Image from 'next/image'
import voice from '@/assets/GoogleRedesign/voice.png'
const GoogleRedesign = () => {
  return (
    <section className='max-w-[1320px] mx-auto px-3 my-[96px]'>
       <div className='lg:flex '>
          
        <div className='lg:w-[648px] w-full h-[440px] bg-[#F7F8FA]'>
            <div className='lg:p-12 p-6'>
            <button className="bg-[#00AEEF] w-[100px] h-[38px] rounded-[37px] text-white text-[12px] font-bold leading-4 tracking-[ 0.6px] mb-4">Case Study</button>
               <h1 className='text-black font-semibold text-[40px] leading-[56px]'>Google Website UI/UX Redesign</h1>

               <p className='mt-6 text-[#444] text-[24px] font-normal leading-8'>We create new UI on the Google website for users. Fixed some issues at the user level.</p>


               <button className="bg-ButtonColor w-[196px] h-[56px] rounded-[37px] text-white text-[18px] font-semibold leading-6 tracking-[ 0.5px] uppercase mt-12">Learn More</button>
            </div>
        </div>

         <div className='lg:w-[672px] w-full h-[448px]'>
         <Image className="w-full h-full " src={voice} alt='' height={448} width={672} layout='responsive'/>
         </div>

       </div>
    </section>
  )
}

export default GoogleRedesign