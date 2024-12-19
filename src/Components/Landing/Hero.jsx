import React, { useState } from 'react'
import bgImage from '../../assets/Landing_page_imgs/bg-img.jpg'
import star from '../../assets/Landing_page_imgs/star.svg';
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Hero() {
  return (
    <div className='relative'>
      <img
        alt="Hotel Room Background"
        className="w-full h-screen object-cover"
        src={bgImage}
      />
      <div
        className="absolute inset-0 flex flex-col justify-center items-start px-3 md:px-10 lg:px-24 bg-black/50"
      >
        <span className="w-[2px] h-20 bg-white/50 md:mt-12 mb-10 md:mb-5"></span>
        <p className="text-[#C09569] text-xs md:text-lg tracking-widest md:tracking-[6px] font-poppins mb-4">
          BEST PLACE TO RELAX &amp; ENJOY
        </p>
        <h1 className="text-[2.2rem] md:text-[4rem] lg:text-[6rem] font-thin leading-tight mb-5 font-bellefair text-white">
          Perfect Place to Enjoy <br /> Your Life
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
              <span className="font-poppins text-white/80 text-xs md:text-base"> 4.8 Rated Around The World </span>
              <div className="flex gap-1">
                  <img src={star} className="w-5" alt="" />
                  <img src={star} className="w-5" alt="" />
                  <img src={star} className="w-5" alt="" />
                  <img src={star} className="w-5" alt="" />
                  <img src={star} className="w-5" alt="" />
                </div>
            </div>
        </div>
        <div className="flex space-x-6">
          <button
            className="w-12 h-12 text-xs flex items-center justify-center border-2 border-white/70 text-white/70 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            className="w-12 h-12 text-xs flex items-center justify-center border-2 border-white/70 text-white/70 rounded-full"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
