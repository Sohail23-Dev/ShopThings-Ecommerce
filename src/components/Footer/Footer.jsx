import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#d3d0ec] border-t border-gray-200 pt-10 pb-2 px-2 sm:px-4 mt-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 flex-wrap">
          {/* Brand and Newsletter */}
          <div className="flex-1 min-w-[220px] flex flex-col items-start mb-6 md:mb-0">
            <div className="font-logo text-2xl text-black mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#2563eb"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v7"
                />
                <path stroke="#2563eb" strokeWidth="2" d="M8 17l2 2 4-4" />
              </svg>{" "}
              <span className="font-extrabold text-2xl text-black">
                Shop
                <span className="text-blue-600">Things</span>
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-3 max-w-xs">
              Subscribe to our newsletter for the latest updates on features and
              product releases.
            </p>
            <form className="flex w-full max-w-xs mb-1">
              <input
                type="email"
                placeholder="Your email here"
                className="flex-1 px-2 py-2 rounded-l-md border border-gray-300 focus:border-blue-400 outline-none text-sm bg-white"
              />
              <button
                type="submit"
                className="px-2 py-2 bg-white border border-gray-300 rounded-r-md text-black font-semibold hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[11px] text-gray-500 mt-1">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </p>
          </div>
          {/* Useful Links */}
          <div className="flex-1 min-w-[120px] flex flex-col items-start mb-6 md:mb-0">
            <div className="font-bold text-md text-black mb-2">
              Useful Links
            </div>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/FAQ" className="hover:text-blue-600">
                  FAQ
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
              
            </ul>
          </div>
          {/* More Links */}
          <div className="flex-1 min-w-[120px] flex flex-col items-start mb-6 md:mb-0">
            <div className="font-bold text-md text-black mb-2">More Links</div>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div className="flex-1 min-w-[120px] flex flex-col items-start">
            <div className="font-bold text-md text-black mb-2">
              Stay Connected
            </div>
            <ul className="text-gray-700 text-sm space-y-1">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                </svg>
                Facebook
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.783 2.295 7.149 2.233 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0z" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
                Instagram
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.763.127 1.124C7.691 8.095 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.016-.634.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                X
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-7 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm7-12c-.552 0-1 .447-1 1s.448 1 1 1 1-.447 1-1-.448-1-1-1zm-7 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" />
                </svg>
                LinkedIn
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186c-.195-.73-.77-1.305-1.5-1.5C20.88 4.5 12 4.5 12 4.5s-8.88 0-9.998.186c-.73.195-1.305.77-1.5 1.5C0 7.12 0 12 0 12s0 4.88.186 5.814c.195.73.77 1.305 1.5 1.5C3.12 19.5 12 19.5 12 19.5s8.88 0 9.998-.186c.73-.195 1.305-.77 1.5-1.5C24 16.88 24 12 24 12s0-4.88-.186-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" />
                </svg>
                YouTube
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 text-center gap-2 flex-wrap">
          <div>© 2025 ShopThings. All rights reserved.</div>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600 ml-0 md:ml-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 ml-0 md:ml-4">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-600 ml-0 md:ml-4">
              Cookie Settings
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
