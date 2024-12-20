import React from 'react'

function ContactForm() {
  return (
    <div className='w-64 bg-[#2e2b2c] p-5 absolute left-1/2 -bottom-44 -translate-x-1/2 text-white md:left-[60%] md:translate-x-0 lg:w-80 lg:p-10 lg:left-[70%] lg:-bottom-64'>
      <h2 className='font-bellefair text-base lg:text-xl'>Check In</h2>
      <input type='text' className="w-full pl-3 font-poppins py-1 text-primary placeholder:text-primary border-none outline-none bg-[#3e3c3d]" placeholder='Your name here' />
      <h2 className='font-bellefair text-base lg:text-xl mt-4 lg:mt-8'>Check Out</h2>
      <input type='text' className="w-full pl-3 font-poppins py-1 text-primary placeholder:text-primary border-none outline-none bg-[#3e3c3d]" placeholder='Your email here' />
      <h2 className='font-bellefair text-base lg:text-xl mt-4 lg:mt-8'>Message</h2>
      <textarea name="" className='w-full h-24 lg:h-36 pl-3 font-poppins py-1 text-primary placeholder:text-primary border-none outline-none bg-[#3e3c3d] resize-none' placeholder='Enter message here'></textarea>
      <button className='font-serif italic text-primary text-sm lg:text-base mt-6 lg:mt-10 w-full text-center'>Connect with Us ›</button>
    </div>
  )
}

export default ContactForm
