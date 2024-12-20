import React, { useState } from 'react'
import bgImage from '../../assets/Landing_page_imgs/bg-img.jpg'
import star from '../../assets/Landing_page_imgs/star.svg';
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import ContactForm from './ContactForm';

function ContactHero() {
  return (
    <section className='relative'>
      <img
        alt="Hotel Room Background"
        className="w-full h-screen object-cover"
        src={bgImage}
      />
      <div
        className="absolute inset-0 flex flex-col justify-center items-start px-3 md:px-10 lg:px-24 bg-black/50"
      >
        <span className="w-[2px] h-20 bg-white/50 md:mt-12 mb-10 md:mb-5"></span>
        <p className="text-primary text-xs md:text-lg tracking-widest md:tracking-[6px] font-poppins mb-4 uppercase">
          Contact us
        </p>
        <h1 className="text-[2.2rem] md:text-[4rem] lg:text-[6rem] font-thin leading-tight mb-5 font-bellefair text-white capitalize">
          get in touch <br /> with us
        </h1>
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactHero
