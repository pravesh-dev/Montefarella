import React from "react";
import logo from '/logo.png'
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      {/* Footer Logo Section */}
      <div className="text-center mb-8 flex flex-col">
        <img
          src={logo}
          alt="Imperial Grand Hotel Logo"
          className="w-12 h-12 mx-auto mb-4"
        />
        <span className="text-[1.15rem] md:text-2xl uppercase font-bellefair">Montefarella</span>
            <span className="text-[0.5rem] md:text-[0.75rem] ml-1 tracking-[3px] text-white/90 uppercase font-mulish">
              Luxury Trullo & Spa
            </span>
        <p className="text-sm text-gray-400 mt-2 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Useful Links Section */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-primary mb-2">
          USEFUL LINKS
        </h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-primary">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              ROOMS
            </a>
          </li>
        </ul>
      </div>

      {/* Subscribe Section */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-primary mb-2">
          SUBSCRIBE
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Don't miss to subscribe to our news, kindly fill the form below.
        </p>
        <form className="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-primary"
          />
          <button className="px-4 py-2 bg-primring-primary text-white rounded-lg hover:bg-primring-primary">
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>

      {/* Social Links Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-yellow-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-500">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm text-gray-500">
        <p>&copy; 2023 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="space-x-2 mt-2">
          <a href="#" className="hover:text-yellow-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-500">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
