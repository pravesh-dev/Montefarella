import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


function FaqData() {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = [
        {
            ques: `How to get to the spa from the nearest airport?`,
            ans: `The nearest airport is Bari Karol Wojtyła Airport (BRI), located about an hour's drive away. Transfers can be arranged upon request`,
        },
        {
            ques: `Is the property pet-friendly?`,
            ans: `Small pets are welcome, under the careful control of the owners, in order to respect the venue`,
        },
        {
            ques: `Do you offer Wi-Fi?`,
            ans: `Yes, we provide free Wi-Fi throughout the property.`,
        },
        {
            ques: `What dining options are available?`,
            ans: `Our property comes with a small but fully-equipped kitchen. There are also excellent dining options in the nearby towns of Castellana Grotte and Putignano.`,
        },
        {
            ques: `Are room upgrades available?`,
            ans: `Please contact us for more information regarding room upgrades and premium packages.`,
        },
        {
            ques: `What about parking?`,
            ans: `Free private parking located inside the property is available on-site, including a charging station for electric vehicles.`,
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
