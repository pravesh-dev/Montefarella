import React from 'react';
import { FaBell } from "react-icons/fa";


function AboutInfo() {
  return (
    <section className='w-full h-auto bg-white px-1 pt-52 flex flex-col gap-3 md:flex-row md:justify-center md:gap-14 md:pt-28 md:h-[110vh] lg:h-[120vh] lg:pt-36 lg:justify-between lg:gap-0 lg:px-28 xl:px-40 xl:h-[110vh]'>
      <div className='w-full h-52 bg-gray-900 flex-shrink-0 md:w-80 md:h-[33rem] lg:w-96 lg:h-[35rem] xl:w-[28rem]'>
        <img src="/" className='w-full h-full object-cover' alt="" />
      </div>
      <div className='py-4 md:w-[45%] lg:-[50%]'>
        <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
        <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>Discover Out Hotel</h2>
        <h1 className='font-bellefair text-5xl my-2 md:text-6xl lg:text-7xl xl:w-[30rem]'>Enjoy A Luxury Experience</h1>
        <p className='font-poppins text-black/70 text-sm md:w-[23rem] lg:w-[30rem] lg:text-base'>At Trullo Monte Farella, we invite you to experience the perfect blend of tradition and luxury in the heart of Puglia. With breathtaking views, personalized spa treatments, and a serene atmosphere, we provide a truly unique escape. Whether you're here to relax or reconnect, we promise a stay that’s both unforgettable and rejuvenating.
        </p>
        <div className='flex flex-wrap'>
            <div className='w-1/2 flex items-center gap-2 mb-3'>
                <span className='text-4xl text-primary'><FaBell /></span>
                <div>
                    <h2 className='font-bellefair text-xl'>Facility</h2>
                    <h1 className='font-poppins text-xl text-primary font-bold tracking-wider'>150++</h1>
                </div>
            </div>
            <div className='w-1/2 flex items-center gap-2 mb-3'>
                <span className='text-4xl text-primary'><FaBell /></span>
                <div>
                    <h2 className='font-bellefair text-xl'>Facility</h2>
                    <h1 className='font-poppins text-xl text-primary font-bold tracking-wider'>150++</h1>
                </div>
            </div>
            <div className='w-1/2 flex items-center gap-2 mb-3'>
                <span className='text-4xl text-primary'><FaBell /></span>
                <div>
                    <h2 className='font-bellefair text-xl'>Facility</h2>
                    <h1 className='font-poppins text-xl text-primary font-bold tracking-wider'>150++</h1>
                </div>
            </div>
            <div className='w-1/2 flex items-center gap-2 mb-3'>
                <span className='text-4xl text-primary'><FaBell /></span>
                <div>
                    <h2 className='font-bellefair text-xl'>Facility</h2>
                    <h1 className='font-poppins text-xl text-primary font-bold tracking-wider'>150++</h1>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
