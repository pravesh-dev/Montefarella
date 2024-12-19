import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";


function GiftSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <section className="flex flex-col bg-[#2c2b2b] items-center w-full h-auto py-16 px-1 gap-2">
      <span className="w-[2px] inline-block h-16 bg-white/50 mb-4 md:mb-5"></span>
      <h2 className="font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl">
        Gift a Dream Stay
      </h2>
      <h1 className="font-bellefair text-white text-4xl text-center my-2 md:w-[35rem] md:text-5xl lg:text-7xl lg:w-[50rem] lg:mb-5">
        Customize Your Luxury Stay Gift Card
      </h1>
      <div className="relative md:flex items-center">
        <div className="p-4 w-[90vw] bg-white mt-4 md:p-5 md:w-[30rem] md:mt-0 z-20 lg:w-[35rem]">
          <h1 className="text-4xl font-bellefair mb-2 md:mb-1">Gift Card Form</h1>
          <hr className="border-t-2 border-primary mb-4 md:mb-2" />
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 md:mb-1">
              <div>
                <label className="block text-lg mb-1 font-bellefair">Receipt Name</label>
                <input
                  type="text"
                  className="w-full p-2 font-poppins bg-black/20 border-none outline-none"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 font-bellefair">Receipt Email</label>
                <input
                  type="email"
                  className="w-full p-2 font-poppins bg-black/20 border-none outline-none"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-1">
              <label className="block text-lg mb-1 font-bellefair">Your Message</label>
              <textarea className="w-full font-poppins bg-black/20 p-2 h-32 outline-none"></textarea>
            </div>
            <button
              type="submit"
              className="w-44 text-primary border-t-2 border-b-2 border-primary py-1 font-poppins italic flex items-center justify-center"
            >
              Gift Stay<span className="ml-2"><FaChevronRight /></span>
            </button>
          </form>
        </div>
        <div className="w-[30rem] h-[25rem] bg-black hidden md:block -ml-48 lg:w-[40rem] lg:h-[30rem]">
          <img src={images[currentImage]} className="w-full h-full object-cover" alt="Gift Card Image" />
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center gap-3 mt-5">
      {
        images.map((item, index)=>{
          return (
            <span key={index} className={`${index === currentImage ? 'bg-primary scale-125' : 'bg-white'} w-3 h-3 rounded-full duration-200`}></span>
          )
        })
      }
      </div>
    </section>
  );
}

export default GiftSection;
