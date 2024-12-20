import React from 'react'
import GalleryMain from './GalleryMain'

function GallerySection() {
  return (
    <div className='w-full bg-white flex flex-col px-2 py-10 lg:px-20 xl:px-32'>
      <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
      <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>Our Hotel’s Beauty</h2>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
      <h1 className='font-bellefair text-3xl my-2 md:text-5xl md:w-[50%] lg:text-6xl lg:w-[25rem]'>Enjoy A Luxury Experience</h1>
      <p className='md:text-right font-poppins md:w-[50%] xl:w-[40rem]'>Take a stroll through our hotel gallery and imagine yourself here, enjoying every moment of your stay. From cozy interiors to breathtaking views, we’ve captured all the beauty that makes our place special.</p>
      </div>
      <GalleryMain />
    </div>
  )
}

export default GallerySection
