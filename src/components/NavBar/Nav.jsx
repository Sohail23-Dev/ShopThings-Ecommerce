import { React } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container flex items-center justify-between bg-white shadow-sm px-8 py-2 sticky top-0 z-10">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
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
          <path
            stroke="#2563eb"
            strokeWidth="2"
            d="M8 17l2 2 4-4"
          />
        </svg>

        <Link to="/">
        <span className="font-extrabold text-2xl text-black">
          Shop
          <span className="text-blue-600">Things</span>
        </span>
        </Link>
      </div>
      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Contact us
        </Link>
        <Link
          to="/review"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Reviews
        </Link>
        <Link
          to="/FAQ"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          FAQ
        </Link>
        <Link
          to="/Cart"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Cart
        </Link>
        <Link
          to="/Login"
          className="ml-4 px-5 py-1 border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
