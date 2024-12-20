import React from 'react'

function BookingInfo() {
  return (
    <div className='w-full bg-white py-10 px-1 text-white'>
      <form className='bg-[#2c2b2a] w-full py-3 px-2'>
        <h1 className='font-bellefair text-2xl'>Reserve :</h1>
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
      <div></div>
    </div>
  )
}

export default BookingInfo
