import React, { useState } from "react";
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import classNames from 'classnames';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <header className={classNames("w-full flex justify-between items-center py-5 px-2 md:px-10 lg:px-20 fixed top-0 left-0 bg-black/20 backdrop-blur-sm z-[99] text-white", { 'bg-neutral-900': !isMenuOpen, 'bg-transparent': isMenuOpen })}>
        <div className="flex items-center">
          <img alt="Montfarella Logo" className="w-9 md:w-12" src={Logo} />
          <div className="flex flex-col items-center">
            <span className="text-[1.15rem] md:text-2xl uppercase font-bellefair">Montefarella</span>
            <span className="text-[0.5rem] md:text-[0.75rem] ml-1 tracking-[3px] text-white/90 uppercase font-mulish">
              Luxury Trullo & Spa
            </span>
          </div>
        </div>
        <nav className={classNames(`flex flex-col md:flex-row w-80 py-20 gap-5 items-center fixed top-0 h-screen md:static md:w-auto md:gap-6 lg:gap-16 md:h-auto md:py-0 ${isMenuOpen ? 'left-0' : '-left-full'} duration-150 font-poppins z-[99]`, { 'bg-neutral-900': !isMenuOpen, 'bg-transparent': isMenuOpen })}>
          <Link
            className={classNames("w-full py-3 text-center nav_items active hover:text-primary text-primary tracking-[1px] border-b-2 border-primary md:w-auto md:py-0 md:bg-transparent md:border-none", { 'bg-[#c095691b]': !isMenuOpen, 'hover:bg-[#c095691b]': isMenuOpen })}
            to="/"
          >
            HOME
          </Link>
          <Link
            className={classNames("w-full py-3 text-center nav_items hover:text-primary tracking-[1px] border-b-2 border-primary md:w-auto md:py-0 md:bg-transparent md:border-none", { 'bg-[#c095691b]': !isMenuOpen, 'hover:bg-[#c095691b]': isMenuOpen })}
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className={classNames("w-full py-3 text-center nav_items hover:text-primary tracking-[1px] border-b-2 border-primary md:w-auto md:py-0 md:bg-transparent md:border-none", { 'bg-[#c095691b]': !isMenuOpen, 'hover:bg-[#c095691b]': isMenuOpen })}
            to="/service"
          >
            SERVICE
          </Link>
          <Link className={classNames("w-full py-3 text-center nav_items hover:text-primary tracking-[1px] border-b-2 border-primary md:w-auto md:py-0 md:bg-transparent md:border-none", { 'bg-[#c095691b]': !isMenuOpen, 'hover:bg-[#c095691b]': isMenuOpen })} to="/contact">
            CONTACT US
          </Link>
          <button className={classNames('absolute top-3 right-3 text-lg w-10 h-10 rounded-md bg-red-600 text-white md:hidden', { 'bg-[#c095691b]': !isMenuOpen, 'hover:bg-[#c095691b]': isMenuOpen })} onClick={() => setIsMenuOpen(false)}>X</button>
        </nav>
        <button className={classNames('text-4xl px-3 py-1 rounded-sm text-white md:hidden', { 'bg-[#c095691b]': !isMenuOpen, 'hover:bg-[#c095691b]': isMenuOpen })} onClick={() => setIsMenuOpen(true)}><HiOutlineMenuAlt3 /></button>
      </header>
    </div>
  );
}

export default Header;
