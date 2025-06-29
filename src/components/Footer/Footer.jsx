import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-2 px-2 sm:px-4 mt-10 relative top-[10vh]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 text-center flex-wrap">
          {/* Brand and Description */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center mb-6 md:mb-0">
            <div className="font-extrabold text-2xl text-black mb-2 flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#2563eb"
                className="w-8 h-8 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v7"
                />
                <path stroke="#2563eb" strokeWidth="2" d="M8 17l2 2 4-4" />
              </svg>
              Shop<span className="text-blue-600">Things</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Your trusted destination for seamless online shopping. We're
              committed to quality, convenience, and customer satisfaction —
              bringing you the best products, fast delivery, and reliable
              service every step of the way.
            </p>
          </div>
          {/* Address */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center mb-6 md:mb-0">
            <div className="font-bold text-md text-black mb-2">Address</div>
            <p className="text-gray-600 text-sm">
              Sector 136, Sovergein Tower
              <br />
              6th Floor
              <br />
              Noida, Uttar Pradesh
            </p>
          </div>
          {/* Links */}
          <div className="flex-1 min-w-[120px] flex flex-col items-center">
            <div className="font-bold text-md text-black mb-2">Links</div>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Review" className="hover:text-blue-600">
                  Review
                </Link>
              
              </li>
              <li>
                <Link to="/Cart" className="hover:text-blue-600">
                  Cart
                </Link>
               
              </li>
              <li>
               <Link to="/FAQ" className="hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center border-t border-gray-200 mt-8 pt-4 text-xs text-gray-500 text-center gap-2 flex-wrap">
          <div>© 2025 ShopThings | All Rights Reserved</div>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
