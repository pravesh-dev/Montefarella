import React from "react";

function AboutHero() {
  return (
    <div className="w-full h-screen relative">
      <img
        src="/"
        className="w-full h-full object-cover"
        alt="Background image"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black flex flex-col justify-center items-center gap-3">
        <span className="w-[2px] h-16 bg-white/50 mb-4 md:mb-5"></span>
        <h2 className="font-poppins text-primary text-2xl tracking-wider uppercase md:text-4xl lg:text-5xl">
          About us
        </h2>
        <h1 className="font-bellefair capitalize text-white text-4xl text-center my-2 md:text-7xl lg:text-8xl">
          Discover our story
        </h1>
      </div>
    </div>
  );
}

export default AboutHero;
