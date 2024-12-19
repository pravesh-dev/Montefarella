import React from 'react'
import DatePicker from './DatePicker'

function HotelBook() {
  return (
    <div className='w-64 bg-[#2e2b2c] p-5 absolute left-1/2 -bottom-48 -translate-x-1/2 text-white md:left-[60%] md:translate-x-0 lg:w-80 lg:p-10 lg:left-[70%]'>
      <h2 className='font-bellefair text-base lg:text-xl'>Check In</h2>
      <DatePicker />
      <h2 className='font-bellefair text-base lg:text-xl mt-4 lg:mt-8'>Check Out</h2>
      <DatePicker />
      <div className='flex justify-between mt-4 lg:mt-8'>
      <div>
      <h2 className='font-bellefair text-base lg:text-xl'>Room</h2>
      <input type="number" className='bg-[#3e3c3d] text-primary font-poppins w-20 h-8 text-center placeholder:text-primary border-none outline-none' placeholder='Count'  />
      </div>
      <div>
      <h2 className='font-bellefair text-base lg:text-xl'>Guest</h2>
      <input type="number" className='bg-[#3e3c3d] text-primary font-poppins w-20 h-8 text-center placeholder:text-primary border-none outline-none' placeholder='Count'  />
      </div>
      </div>
      <button className='font-serif italic text-primary text-sm lg:text-base mt-6 lg:mt-10 w-full text-center'>Reserve Your Stay ›</button>
    </div>
  )
}

export default HotelBook
