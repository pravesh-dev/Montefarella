import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


function FaqData() {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = [
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        },
        {
            ques: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            ans: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magni architecto eos pariatur, labore id et ullam rerum, sit molestias ipsam odio voluptatum, reiciendis illo.`,
        }
    ]
  return (
    <div className='flex flex-wrap justify-between items-start'>
      {data.map((item, index) => (
        <div key={index} className='w-full mt-7 md:mt-10 md:w-[45%] border-b-2 border-black/30 pb-2'>
          <h1 className='font-bellefair text-base flex items-center justify-between md:text-xl lg:text-2xl' onClick={() => setActiveIndex(index === activeIndex ? null : index)}>{item.ques} <span>{index === activeIndex ? <FaAngleUp /> : <FaAngleDown />}</span></h1>
          <p className={`font-poppins text-xs ${index === activeIndex ? 'h-auto' : 'h-0'} overflow-hidden text-black/70 md:text-sm lg:text-base duration-500`}>{item.ans}</p>
        </div>
      ))}
    </div>
  )
}

export default FaqData
