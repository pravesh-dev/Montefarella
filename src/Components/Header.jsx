import React from "react";
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header class="w-full flex justify-between items-center py-5 px-20 fixed top-0 left-0 z-[99] text-white">
        <div class="flex items-center">
          <img alt="Montfarella Logo" class="w-12" src={Logo} />
          <div class="flex flex-col items-center">
            <span class="text-2xl uppercase font-bellefair">Montefarella</span>
            <span class="text-xs ml-1 tracking-[3px] text-white/90 uppercase font-mulish">
              Luxury Trullo & Spa
            </span>
          </div>
        </div>
        <nav class="flex gap-14 text-sm items-center font-poppins">
          <Link
            class="nav_items active hover:text-[#C09569] text-[#C09569] tracking-[1px] flex items-center gap-2"
            to="/"
          >
            HOME
          </Link>
          <Link
            class="nav_items hover:text-[#C09569] tracking-[1px]"
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            class="nav_items hover:text-[#C09569] tracking-[1px]"
            to="/service"
          >
            SERVICE
          </Link>
          <Link class="nav_items hover:text-[#C09569]" to="/contact">
            CONTACT US
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
