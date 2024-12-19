import React from "react";
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header class="w-full flex justify-between items-center py-5 px-20 fixed top-0 left-0 z-[99] text-white">
        <div class="flex items-center">
          <img alt="Montfarella Logo" class="w-14" src={Logo} />
          <div class="flex flex-col items-center">
            <span class="text-3xl font_1 tracking-[3px]"> Montfarella </span>
            <span class="text-xs ml-1 font_3 tracking-[3px] text-white/90">
              {" "}
              luxury Trullo & Spa{" "}
            </span>
          </div>
        </div>
        <nav class="flex gap-14 text-sm items-center">
          <Link
            class="nav_items active hover:text-[#C09569] text-[#C09569] tracking-[1px] font_2 flex items-center gap-2"
            to="/"
          >
            {" "}
            HOME <span class="rotate-90 text-2xl inline-block">›</span>{" "}
          </Link>
          <Link
            class="nav_items hover:text-[#C09569] tracking-[1px] font_2"
            to="/about"
          >
            {" "}
            ABOUT{" "}
          </Link>
          <Link
            class="nav_items hover:text-[#C09569] tracking-[1px] font_2"
            to="/service"
          >
            {" "}
            SERVICE{" "}
          </Link>
          <Link
            class="nav_items hover:text-[#C09569] tracking-[1px] font_2 flex items-center gap-2"
            to="/pages"
          >
            {" "}
            PAGES <span class="rotate-90 text-2xl inline-block">›</span>
          </Link>
          <Link class="nav_items hover:text-[#C09569] font_2" to="/contact">
            {" "}
            CONTACT US{" "}
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
