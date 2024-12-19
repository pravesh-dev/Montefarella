import React from "react";

function Header() {
  return (
    <div>
      <header class="w-full flex justify-between items-center py-5 px-20 fixed top-0 left-0 z-[99]">
        <div class="flex items-center">
          <img alt="Montfarella Logo" class="w-20" src="logo.png" />
          <div class="flex flex-col items-center">
            <span class="text-3xl font_1 tracking-[3px]"> Montfarella </span>
            <span class="text-xs ml-1 font_3 tracking-[3px] text-white/90">
              {" "}
              luxury Trullo & Spa{" "}
            </span>
          </div>
        </div>
        <nav class="flex gap-14 text-sm items-center">
          <a
            class="nav_items active hover:text-[#C09569] tracking-[1px] font_2 flex items-center gap-2"
            href="#"
          >
            {" "}
            HOME <span class="rotate-90 text-2xl inline-block">›</span>{" "}
          </a>
          <a
            class="nav_items hover:text-[#C09569] tracking-[1px] font_2"
            href="#"
          >
            {" "}
            ABOUT{" "}
          </a>
          <a
            class="nav_items hover:text-[#C09569] tracking-[1px] font_2"
            href="#"
          >
            {" "}
            SERVICE{" "}
          </a>
          <a
            class="nav_items hover:text-[#C09569] tracking-[1px] font_2 flex items-center gap-2"
            href="#"
          >
            {" "}
            PAGES <span class="rotate-90 text-2xl inline-block">›</span>
          </a>
          <a class="nav_items hover:text-[#C09569] font_2" href="#">
            {" "}
            CONTACT US{" "}
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
