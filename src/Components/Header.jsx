import React, { useState } from "react";
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  return (
    <div>
      <header class="w-full flex justify-between items-center py-5 px-2 md:px-10 lg:px-20 fixed top-0 left-0 z-[99] text-white">
        <div class="flex items-center">
          <img alt="Montfarella Logo" class="w-9 md:w-12" src={Logo} />
          <div class="flex flex-col items-center">
            <span class="text-[1.15rem] md:text-2xl uppercase font-bellefair">Montefarella</span>
            <span class="text-[0.5rem] md:text-[0.75rem] ml-1 tracking-[3px] text-white/90 uppercase font-mulish">
              Luxury Trullo & Spa
            </span>
          </div>
        </div>
        <nav class={`flex flex-col md:flex-row bg-neutral-900 md:bg-transparent w-80 py-20 gap-5 items-center fixed top-0 h-screen md:static md:w-auto md:gap-6 lg:gap-16 md:h-auto md:py-0 ${isMenuOpen ? 'left-0' : '-left-full'} duration-150 font-poppins z-[99]`}>
          <Link
            class="w-full py-3 bg-[#c095691b] text-center nav_items active hover:text-[#C09569] text-[#C09569] tracking-[1px] border-b-2 border-[#c09569] md:w-auto md:py-0 md:bg-transparent md:border-none"
            to="/"
          >
            HOME
          </Link>
          <Link
            class="w-full py-3 bg-[#c095691b] text-center nav_items hover:text-[#C09569] tracking-[1px] border-b-2 border-[#c09569] md:w-auto md:py-0 md:bg-transparent md:border-none"
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            class="w-full py-3 bg-[#c095691b] text-center nav_items hover:text-[#C09569] tracking-[1px] border-b-2 border-[#c09569] md:w-auto md:py-0 md:bg-transparent md:border-none"
            to="/service"
          >
            SERVICE
          </Link>
          <Link class="w-full py-3 bg-[#c095691b] text-center nav_items hover:text-[#C09569] tracking-[1px] border-b-2 border-[#c09569] md:w-auto md:py-0 md:bg-transparent md:border-none" to="/contact">
            CONTACT US
          </Link>
          <button className='absolute top-3 right-3 text-lg w-10 h-10 rounded-md bg-red-600 text-white md:hidden' onClick={() => setIsMenuOpen(false)}>X</button>
        </nav>
        <button className='text-4xl px-3 py-1 rounded-sm text-white md:hidden' onClick={() => setIsMenuOpen(true)}><HiOutlineMenuAlt3 /></button>
      </header>
    </div>
  );
}

export default Header;
