import React from 'react'
import bgImage from '../../assets/Landing_page_imgs/bg-img.jpg'

function Hero() {
  return (
    <div className='relative'>
      <img
        alt="Hotel Room Background"
        className="w-full h-screen object-cover brightness-75"
        src={bgImage}
      />
      <div
        className="absolute inset-0 flex flex-col justify-center items-start px-24 bg-black/40"
      >
      <span className="w-[2px] h-24 bg-white/50 mt-12 mb-5"></span>
        <p className="text-[#C09569] text-lg font_2 tracking-[6px] -mb-2 font-poppins">
          BEST PLACE TO RELAX &amp; ENJOY
        </p>
        <h1 className="text-[6rem] font-thin leading-tight mb-4 font-bellefair text-white">
          Perfect Place to Enjoy <br/> Your Life
        </h1>
        <div className="flex items-center mb-10">
          <img
            alt="Reviewer 1"
            className="w-10 h-10 rounded-full border-2 border-[#C09569] -mr-3"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/FoS7fjUtcMXjECupS8BqUlgDDY0tna0oGFIJB26uhEYFCLeTA.jpg"
            width="40"
          />
          <img
            alt="Reviewer 2"
            className="w-10 h-10 rounded-full border-2 border-[#C09569] -mr-3"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/Wjf3Je0hJSilq0gVwIUjnCtfQD4YAdlN7jhmyRqWMEYQIs4nA.jpg"
            width="40"
          />
          <img
            alt="Reviewer 3"
            className="w-10 h-10 rounded-full border-2 border-[#C09569]"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/PML4JiBUtrLgKlnKhj2t3Gzb1vXxch6wcPyHnQhaTW9AhFfJA.jpg"
            width="40"
          />
          <div className="ml-5 flex flex-col gap-1">
              <span className="font_2 text-white/80"> 4.8 Rated Around The World </span>
              <div className="flex gap-1">
                  <img src="star.svg" className="w-5" alt="" />
                  <img src="star.svg" className="w-5" alt="" />
                  <img src="star.svg" className="w-5" alt="" />
                  <img src="star.svg" className="w-5" alt="" />
                  <img src="star.svg" className="w-5" alt="" />
                </div>
            </div>
        </div>
        <div className="flex space-x-6">
          <button
            className="w-12 h-12 text-xs flex items-center justify-center border-2 border-white/70 text-white/70 rounded-full"
          >
            <i className="fas fa-chevron-left"> </i>
          </button>
          <button
            className="w-12 h-12 text-xs flex items-center justify-center border-2 border-white/70 text-white/70 rounded-full"
          >
            <i className="fas fa-chevron-right"> </i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
