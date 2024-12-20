import React from 'react'
import FaqData from './FaqData'

function Faq() {
  return (
    <div className='w-full min-h-[70vh] flex flex-col justify-center py-10 md:pb-20 px-2 md:px-16'>
      <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
      <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>Discover Our Hotel</h2>
      <h1 className='font-bellefair text-3xl my-2 md:text-5xl lg:text-6xl'>Enjoy A Luxury Experience</h1>
      <FaqData />
    </div>
  )
}

export default Faq
