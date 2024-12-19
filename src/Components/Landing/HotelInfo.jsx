import React from 'react'
import DatePicker from './DatePicker'

function HotelInfo() {
  return (
    <div className='w-full h-auto bg-white px-1 pt-52 flex flex-col gap-3 md:flex-row md:justify-center md:gap-14 md:pt-28 md:h-[110vh] lg:h-[120vh] lg:pt-36 lg:justify-between lg:gap-0 lg:px-28 xl:px-40 xl:h-[110vh]'>
      <div className='w-full h-52 bg-gray-900 flex-shrink-0 md:w-80 md:h-[33rem] lg:w-96 lg:h-[35rem] xl:w-[28rem]'>
        <img src="/" className='w-full h-full object-cover' alt="" />
      </div>
      <div className='py-4 md:w-[45%] lg:-[50%]'>
        <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
        <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>Discover Pure Comfort</h2>
        <h1 className='font-bellefair text-5xl my-2 md:text-6xl lg:text-7xl xl:w-[30rem]'>Experience True Luxury</h1>
        <p className='font-poppins text-black/70 text-sm md:w-[23rem] lg:w-[30rem] lg:text-base'>Welcome to Luxury Suite & Spa Trullo Monte Farella! Here, you can unwind in a hot tub under the starry cone, enjoying the unique Puglia trullo experience that you won’t find anywhere else. It’s the perfect romantic getaway for couples looking for privacy and relaxation, with a beautiful patio surrounded by lush greenery. Our charming property reflects the spirit of Puglia, and we’ve got everything you need, including private parking with an EV charging station. We can’t wait to help you create unforgettable memories here!</p>
        <button className='font-poppins italic text-primary border-t-2 border-b-2 border-primary text-sm py-1 px-7 my-3 lg:my-7 lg:text-base'>Discover More ›</button>
      </div>
    </div>
  )
}

export default HotelInfo
