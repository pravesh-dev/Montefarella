import React from "react";
import logo from '/logo.png'
import { FaAngleRight } from "react-icons/fa6";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#2c2b2b] text-gray-300 py-8 md:px-5 lg:px-16">
      <div className="md:flex items-center justify-between md:gap-10">
      {/* Footer Logo Section */}
      <div className="mb-8 flex flex-col items-center md:items-start">
        <div className="md:flex">
        <img
          src={logo}
          alt="Imperial Grand Hotel Logo"
          className="w-12 h-12 mx-auto mb-4"
          />
        <div className="flex flex-col">
        <span className="text-[1.15rem] md:text-2xl uppercase font-bellefair">Montefarella</span>
            <span className="text-[0.5rem] md:text-[0.75rem] ml-1 tracking-[3px] text-white/90 uppercase font-mulish">
              Luxury Trullo & Spa
            </span>
        </div>
        </div>
        <p className="text-sm text-gray-400 text-center mt-2 font-poppins w-80 md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Useful Links Section */}
      <div className="text-center mb-8 md:text-left">
        <h2 className="text-lg font-semibold text-primary mb-2">
          USEFUL LINKS
        </h2>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="hover:text-primary">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-primary">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-primary">
              ROOMS
            </Link>
          </li>
        </ul>
      </div>

      {/* Subscribe Section */}
      <div className="text-center mb-8 md:w-72 md:text-left">
        <h2 className="text-lg font-semibold text-primary mb-2">
          SUBSCRIBE
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Don't miss to subscribe to our news, kindly fill the form below.
        </p>
        <form className="h-10 flex justify-center items-center md:justify-start">
          <input
            type="email"
            placeholder="Your Email Address"
            className="h-full pl-3 text-primary placeholder:text-primary bg-black/20 focus:outline-none focus:ring-primary"
          />
          <button className="w-10 h-full bg-primary text-white flex justify-center items-center">
            <FaAngleRight />
          </button>
        </form>
      </div>
      </div>
      {/* Social Links Section */}
      <div className="text-center mb-8 flex items-center justify-center gap-4 md:justify-between">
        <span className="w-14 h-[1.5px] bg-white/50 md:w-60 lg:w-80 xl:w-[30rem]"></span>
        <div className="flex justify-center space-x-4">
          <Link to="#" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1">
            <FaTwitter />
          </Link>
          <Link to="#" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1">
            <FaFacebookF />
          </Link>
          <Link to="#" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1">
            <FaInstagram />
          </Link>
          <Link to="#" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1">
            <FaPinterest />
          </Link>
          <Link to="#" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1">
            <FaLinkedinIn />
          </Link>
        </div>
        <span className="w-14 h-[1.5px] bg-white/50 md:w-60 lg:w-80 xl:w-[30rem]"></span>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm text-gray-500 md:flex items-center justify-between">
        <p>&copy; 2023 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="space-x-2 mt-2 md:mt-0 md:space-x-10">
          <Link to="#" className="hover:text-yellow-500">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-yellow-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
