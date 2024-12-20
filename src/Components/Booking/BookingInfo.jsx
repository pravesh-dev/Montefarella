import React from 'react'
import { MdLocalLaundryService } from "react-icons/md";

function BookingInfo() {
  return (
    <div className='w-full bg-white py-10 px-1 text-black md:flex md:flex-row-reverse md:px-6 md:items-center lg:px-24 lg:justify-between'>
      <form className='bg-[#2c2b2a] w-full py-3 px-2 text-white md:w-80 lg:w-[28rem] lg:py-7 lg:px-14'>
        <h1 className='font-bellefair text-2xl lg:text-4xl'>Reserve :</h1>
        <label htmlFor='nameInput' className='font-bellefair text-xl mt-5 mb-2 inline-block'>Name</label>
        <input id='nameInput' type="text" className='w-full h-10 pl-2 font-poppins border-none outline-none bg-[#3D3C3C]' />
        <label htmlFor='emailInput' className='font-bellefair text-xl mt-5 mb-2 inline-block'>Email</label>
        <input id='emailInput' type="email" className='w-full h-10 pl-2 font-poppins border-none outline-none bg-[#3D3C3C]' />
        <label htmlFor='checkInInput' className='font-bellefair text-xl mt-5 mb-2 inline-block'>Check In</label>
        <input id='checkInInput' type="text" className='w-full h-10 pl-2 font-poppins border-none outline-none bg-[#3D3C3C]' />
        <label htmlFor='checkOutInput' className='font-bellefair text-xl mt-5 mb-2 inline-block'>Check Out</label>
        <input id='checkOutInput' type="text" className='w-full h-10 pl-2 font-poppins border-none outline-none bg-[#3D3C3C]' />
        <div className='flex justify-between mt-6'>
            <div className='w-[45%]'>

        <label htmlFor='nameInput' className='font-bellefair text-xl mb-2'>Name</label>
        <input id='nameInput' type="text" className='w-full h-10 pl-2 font-poppins border-none outline-none bg-[#3D3C3C]' />
            </div>
            <div className='w-[45%]'>

        <label htmlFor='nameInput' className='font-bellefair text-xl mb-2'>Name</label>
        <input id='nameInput' type="text" className='w-full h-10 pl-2 font-poppins border-none outline-none bg-[#3D3C3C]' />
            </div>
        </div>
        <p className='text-center font-bellefair text-xl my-8'>with prosecco and rose petals or balloons</p>
        <p className='font-bellefair text-3xl text-center'>Total Cost: <span className='text-primary ml-3'>$200</span></p>
        <button className='w-full font-poppins capitalize italic text-primary border-t-2 border-b-2 border-primary text-sm py-1 px-7 my-5 lg:my-7 lg:text-base'>Reserve your stay ›</button>
      </form>
      <div className='md:w-[70%] lg:mr-10 lg:w-[55%]'>
        <h1 className='font-bellefair text-4xl mt-8 mb-3 lg:text-6xl'>Superior Suite</h1>
        <p className='font-poppins text-sm mb-2 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea earum beatae magni similique velit, aspernatur nihil corrupti temporibus. Beatae!</p>
        <p className='font-poppins text-sm mb-2 lg:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam aut a, dignissimos facere sit minima ab. Explicabo aliquam itaque, delectus ut nam rem iure, sit cum incidunt blanditiis harum consequatur aut architecto. Repellat, ab adipisci cupiditate nulla libero est sunt!</p>
        <h2 className='font-bellefair mt-8 text-2xl lg:text-3xl'>Book Application</h2>
        <div className='flex flex-wrap gap-3 mt-2 justify-between'>
            <div className='w-[45%] font-poppins capitalize text-xl flex items-center gap-2'>
                <span className='text-3xl'><MdLocalLaundryService /></span> <span>Laundry Service</span>
            </div>
            <div className='w-[45%] font-poppins capitalize text-xl flex items-center gap-2'>
                <span className='text-3xl'><MdLocalLaundryService /></span> <span>funding</span>
            </div>
            <div className='w-[45%] font-poppins capitalize text-xl flex items-center gap-2'>
                <span className='text-3xl'><MdLocalLaundryService /></span> <span>funding</span>
            </div>
            <div className='w-[45%] font-poppins capitalize text-xl flex items-center gap-2'>
                <span className='text-3xl'><MdLocalLaundryService /></span> <span>funding</span>
            </div>
            <div className='w-[45%] font-poppins capitalize text-xl flex items-center gap-2'>
                <span className='text-3xl'><MdLocalLaundryService /></span> <span>funding</span>
            </div>
            <div className='w-[45%] font-poppins capitalize text-xl flex items-center gap-2'>
                <span className='text-3xl'><MdLocalLaundryService /></span> <span>funding</span>
            </div>
            <div className='w-[45%] font-poppins capitalize text-xl flex items-center gap-2'>
                <span className='text-3xl'><MdLocalLaundryService /></span> <span>funding</span>
            </div>
            <div className='w-[45%] font-poppins capitalize text-xl flex items-center gap-2'>
                <span className='text-3xl'><MdLocalLaundryService /></span> <span>funding</span>
            </div>
        </div>
        <h2 className='font-bellefair mt-8 text-2xl lg:text-3xl'>Available Offers</h2>
        <div className='flex flex-wrap gap-3 mt-2 justify-between'>
            <div className='w-[40%] font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </div>
            <div className='w-[40%] font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </div>
            <div className='w-[40%] font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </div>
            <div className='w-[40%] font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </div>
            <div className='w-[40%] font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </div>
            <div className='w-[40%] font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </div>
            <div className='w-[40%] font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </div>
            <div className='w-[40%] font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </div>
        </div>
        <h2 className='font-bellefair mt-8 text-2xl lg:text-3xl'>Books Rules</h2>
            <p className='font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </p>
            <p className='font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </p>
            <p className='font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </p>
            <p className='font-poppins capitalize text-lg flex gap-3 items-center'>
                <span className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></span> <span>funding</span>
            </p>
      </ div>
    </div>
  )
}

export default BookingInfo
