import React, { useState, useEffect } from "react";
import Logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false); // Close the menu on route change
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  return (
    <div>
      <header className="w-full flex justify-between items-center py-5 px-2 md:px-10 lg:px-20 fixed top-0 left-0 bg-black/20 backdrop-blur-sm z-[99] text-white">
        <div className="flex items-center">
          <img alt="Montfarella Logo" className="w-9 md:w-12" src={Logo} />
          <div className="flex flex-col items-center">
            <span className="text-[1.15rem] md:text-2xl uppercase font-bellefair">Montefarella</span>
            <span className="text-[0.5rem] md:text-[0.75rem] ml-1 tracking-[3px] text-white/90 uppercase font-mulish">
              Luxury Trullo & Spa
            </span>
          </div>
        </div>
        <nav className={`flex flex-col md:flex-row bg-neutral-900 md:bg-transparent w-80 py-20 gap-5 items-center fixed top-0 h-screen md:static md:w-auto md:gap-6 lg:gap-16 md:h-auto md:py-0 ${isMenuOpen ? 'left-0' : '-left-full'} duration-150 font-poppins z-[99]`}>
          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${location.pathname === '/' ? 'text-primary' : 'hover:text-primary'} tracking-[1px] border-b-2 ${location.pathname === '/' ? 'border-primary' : 'border-transparent'} md:w-auto md:py-0 md:bg-transparent md:border-none`}
            to="/"
          >
            HOME
          </Link>
          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${location.pathname === '/about' ? 'text-primary' : 'hover:text-primary'} tracking-[1px] border-b-2 ${location.pathname === '/about' ? 'border-primary' : 'border-transparent'} md:w-auto md:py-0 md:bg-transparent md:border-none`}
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${location.pathname === '/booking' ? 'text-primary' : 'hover:text-primary'} tracking-[1px] border-b-2 ${location.pathname === '/booking' ? 'border-primary' : 'border-transparent'} md:w-auto md:py-0 md:bg-transparent md:border-none`}
            to="/booking"
          >
            SERVICE
          </Link>
          <Link
            className={`w-full py-3 bg-[#c095691b] text-center nav_items ${location.pathname === '/contact' ? 'text-primary' : 'hover:text-primary'} tracking-[1px] border-b-2 ${location.pathname === '/contact' ? 'border-primary' : 'border-transparent'} md:w-auto md:py-0 md:bg-transparent md:border-none`}
            to="/contact"
          >
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
