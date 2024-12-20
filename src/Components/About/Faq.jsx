import React from 'react'

function Faq() {
  return (
    <div className='w-full h-screen flex flex-col px-2 md:px-16'>
      <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
      <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>Discover Out Hotel</h2>
      <div className='flex flex-col items-start justify-between md:flex-row'>
      <h1 className='font-bellefair text-3xl my-2 md:text-5xl lg:text-6xl'>Enjoy A Luxury Experience</h1>
      <button className='font-poppins italic text-primary border-t-2 border-b-2 border-primary text-sm py-1 px-7 my-3 lg:my-7 lg:text-base'>Discover More ›</button>
      </div>
    </div>
  )
}

export default Faq
