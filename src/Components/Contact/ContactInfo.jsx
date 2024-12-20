import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import ContactMap from './ContactMap';

function ContactInfo() {
  return (
    <section className='w-full h-auto bg-white px-1 pt-52 flex flex-col gap-3 md:flex-row md:justify-center md:gap-14 md:pt-28 md:h-[110vh] lg:h-[120vh] lg:pt-36 lg:justify-between lg:gap-0 lg:px-28 xl:px-40 xl:h-[110vh]'>
      <div className='w-full h-80 bg-gray-900 flex-shrink-0 md:w-80 md:h-[33rem] lg:w-96 lg:h-[35rem] xl:w-[28rem] map'>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.6396275809248!2d76.1171510753702!3d28.04460097599097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912b5daad9ce3f7%3A0xab351ba284d2935c!2sP%20G%20College%20Narnaul!5e1!3m2!1sen!2sin!4v1734692729172!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='py-4 md:w-[45%] lg:-[50%]'>
        <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
        <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>Contact info</h2>
        <h1 className='font-bellefair text-5xl my-2 md:text-6xl lg:text-7xl xl:w-[30rem] lg:mb-8'>Contact us</h1>
        <div className='flex gap-3 items-center mb-4 md:gap-7 lg:mb-8'>
            <span className='hover:text-primary text-3xl text-black/60 md:text-6xl'><TfiEmail /></span>
            <div>
            <h2 className='font-bellefair text-2xl md:text-3xl'>Email Address</h2>
            <p className='font-poppins text-sm text-black/60 md:text-base'>bookings.montefarella@gmail.com</p>
            </div>
        </div>
        <div className='flex gap-3 items-center mb-4 md:gap-7 lg:mb-8'>
            <span className='hover:text-primary text-3xl text-black/60 md:text-6xl'><FaMapLocationDot /></span>
            <div>
            <h2 className='font-bellefair text-2xl md:text-3xl'>Hotel Location</h2>
            <p className='font-poppins text-sm text-black/60 md:text-base'>Trullo in Putignano, Italy</p>
            </div>
        </div>
        <div className='flex gap-3 items-center mb-4 md:gap-7 lg:mb-8'>
            <span className='hover:text-primary text-3xl text-black/60 md:text-6xl'><MdCall /></span>
            <div>
            <h2 className='font-bellefair text-2xl md:text-3xl'>Phone Number</h2>
            <p className='font-poppins text-sm text-black/60 md:text-base'>+39 3295645877</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
