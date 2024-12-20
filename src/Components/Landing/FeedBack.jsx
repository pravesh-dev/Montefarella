import React from "react";
import FeedbackSlider from "./FeedbackSlider";

function FeedBack() {
  return (
    <section className="w-full relative pb-10 h-[110vh] md:h-[95vh]">
      <div className="w-full h-96 bg-red-800 lg:h-[30rem]">
        <img src="/" className="w-full h-full" alt="background image" />
      </div>
      <div className="w-full flex flex-col items-center absolute top-0 left-0 py-16">
        <span className="w-[2px] h-16 bg-white/50 mb-4 md:mb-5"></span>
        <h2 className="font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl">
          Our customer review
        </h2>
        <h1 className="font-bellefair capitalize text-white text-4xl text-center my-2 md:w-[35rem] md:text-5xl lg:text-7xl lg:w-[50rem] lg:mb-5">
          what our client says
        </h1>
          <FeedbackSlider />
      </div>
    </section>
  );
}

export default FeedBack;
