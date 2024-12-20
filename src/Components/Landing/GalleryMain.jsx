import React, { useState, useRef } from 'react';
import data from './GalleryData.js';
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './FeedbackSlider.css';
import { Autoplay, Navigation } from 'swiper/modules';

function GalleryMain() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleGallery = (gallery) => {
    setIsOpen(true);
    setSelectedGallery(gallery);
  };

  return (
    <div className="w-full h-auto mt-10 sm:w-[30rem] sm:mx-auto md:w-[95%] lg:w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
          <div className="w-full min-h-52 bg-teal-800 flex-shrink-0 md:w-1/2 lg:min-h-[20rem]">
            <img src={item.image} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="w-full bg-[#2c2b2c]  p-5 flex flex-col flex-shrink-0 text-white md:w-1/2 lg:min-h-[20rem] lg:justify-center lg:px-16">
            <span className="text-primary text-3xl lg:text-4xl">{item.icon}</span>
            <h2 className="font-bellefair text-xl lg:text-2xl lg:my-4">{item.title}</h2>
            <p className="font-poppins text-xs lg:text-base">{item.description}</p>
            <button
              className={`self-${item.buttonAlignment} font-poppins capitalize italic text-primary border-t-2 border-b-2 border-primary text-sm py-1 px-7 my-5 lg:my-7 lg:text-xl lg:py-2`}
              onClick={() => handleGallery(item.galleryImgs)}
            >
              {item.button}
            </button>
          </div>
        </div>
      ))}
      {isOpen && (
        <div className="w-full h-screen bg-black/80 backdrop-blur-md fixed top-0 left-0 z-[100] flex justify-center items-center">
          <button className="text-3xl absolute right-14 top-14 text-primary" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="w-80 h-96 overflow-hidden relative lg:w-[45rem] lg:h-[40rem]">
            <Swiper
              className="mySwiper"
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {selectedGallery.map((img, imgIndex) => (
                <SwiperSlide
                  key={imgIndex}
                  className={`flex items-center justify-center transition-opacity duration-1000`}
                >
                  {img.type === 'img' ? (
                    <div className="w-full h-full bg-teal-600">
                      <img src={img.url} alt={`Gallery Image ${imgIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-teal-600">
                      <video src={img.url} autoPlay loop muted className="w-full h-full object-cover"></video>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
            <button
              ref={prevRef}
              className="custom-prev-button absolute left-20 top-[90%] lg:top-1/2 -translate-y-1/2 z-[100] border-2 border-primary text-primary text-2xl p-3 rounded-full cursor-pointer"
            >
              <FaChevronLeft />
            </button>
            <button
              ref={nextRef}
              className="custom-next-button absolute right-20 top-[90%] lg:top-1/2 -translate-y-1/2 z-[100] border-2 border-primary text-primary text-2xl p-3 rounded-full cursor-pointer"
            >
              <FaAngleRight />
            </button>
        </div>
      )}
    </div>
  );
}

export default GalleryMain;
