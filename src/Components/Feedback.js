"use client"

import FeedbackCard from "./FeedbackCard"




const Feedback = () => {


 

  return (
    <section className='max-w-[1320px] mx-auto px-3'>
  
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>

        <FeedbackCard/>


      </div>
   

    </section>
  )
}

export default Feedback