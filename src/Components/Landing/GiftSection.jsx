import React from "react";

function GiftSection() {
  return (
    <div className="flex flex-col bg-[#2c2b2b] items-center w-full h-auto py-16 px-1 gap-2">
      <span className="w-[2px] inline-block h-16 bg-white/50 mb-4 md:mb-5"></span>
      <h2 className="font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl">
        Gift a Dream Stay
      </h2>
      <h1 className="font-bellefair text-white text-4xl text-center my-2 md:text-6xl lg:text-7xl">
        Customize Your Luxury Stay Gift Card
      </h1>
      <div>
        <div className="p-4 w-[19rem] bg-white mt-4">
          <h1 className="text-4xl font-bellefair mb-2">Gift Card Form</h1>
          <hr className="border-t-2 border-primary mb-4" />
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
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
            <div className="mb-4">
              <label className="block text-lg mb-1 font-bellefair">Your Message</label>
              <textarea className="w-full font-poppins bg-black/20 p-2 h-32 outline-none"></textarea>
            </div>
            <button
              type="submit"
              className="w-44 text-center text-primary border-t-2 border-b-2 border-primary py-1 font-poppins italic"
            >
              <span className="mr-2">Gift Stay</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GiftSection;
