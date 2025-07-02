import { React, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";
import User from "../User/User";

const Nav = () => {
  //Login and User Toggle
  const [isLogin, setisLogin] = useState(false);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    setisLogin(loginStatus === "true");
  }, []);

  // Optional: Listen for login status changes from other tabs/windows
  useEffect(() => {
    const handleStorage = () => {
      setisLogin(localStorage.getItem("isLogin") === "true");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Hide search input when clicking outside
  useEffect(() => {
    if (!showSearch) return;
    function handleClick(e) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showSearch]);

  const totalQuantity = useSelector((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    navigate(`/shop/?search=${encodeURIComponent(value)}`);
  };

  return (
    <nav className="main-bar nav-container flex items-center justify-between bg-[#12004d] shadow px-4 md:px-8 py-2 sticky top-0 z-10 w-full">
      {/* Hamburger for mobile (top left) */}
      <div className="absolute left-4 top-2 md:hidden flex items-center z-50">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#2563eb"
            className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 min-w-[1.75rem] min-h-[1.75rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v7"
            />
            <path stroke="#2563eb" strokeWidth="2" d="M8 17l2 2 4-4" />
          </svg>
        </button>
      </div>
      {/* Left: Logo (hidden on mobile) */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="font-logo text-2xl text-white tracking-wider mr-2 items-center hidden md:flex">
          <span className="font-extrabold text-2xl text-white">
            Shop
            <span className="text-blue-600">Things</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#2563eb"
            className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 min-w-[1.75rem] min-h-[1.75rem] ml-0 md:ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v7"
            />
            <path stroke="#2563eb" strokeWidth="2" d="M8 17l2 2 4-4" />
          </svg>
        </span>
      </div>
      {/* Center: Links (hidden on mobile) */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8">
        <Link
          to="/"
          className="Nav-links text-white hover:text-blue-200 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/Shop"
          className="Nav-links text-white hover:text-blue-200 font-medium transition-colors"
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className="Nav-links text-white hover:text-blue-200 font-medium transition-colors"
        >
          Contact Us
        </Link>
        <Link
          to="/review"
          className="Nav-links text-white hover:text-blue-200 font-medium transition-colors"
        >
          Reviews
        </Link>
        <Link
          to="/FAQ"
          className="Nav-links text-white hover:text-blue-200 font-medium transition-colors"
        >
          FAQ
        </Link>

        <div className="relative flex items-center min-w-[40px] h-10" ref={searchInputRef}>
          <div className="relative flex items-center h-10">
            <input
              type="text"
              autoFocus={showSearch}
              placeholder="Search products..."
              value={search}
              onChange={handleSearch}
              className={`pl-10 pr-4 py-[7px] rounded-full border border-gray-300 focus:border-blue-500 outline-none bg-gray-50 text-gray-700 placeholder-gray-400 shadow-sm absolute left-0 top-0 h-10 transition-all duration-[1500ms] ease-in-out ${showSearch ? 'w-40 lg:w-46 opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
              style={{
                transitionProperty: 'width, opacity',
                overflow: 'hidden',
                zIndex: 20,
              }}
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-auto z-30 cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              onClick={() => setShowSearch(true)}
              aria-label="Show search"
              style={{transition: 'color 0.2s'}}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
      {/* Right: Cart, Login/User, Shop Button */}
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <Link
          to="/Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="white"
            className=" cart-icon w-6 h-6 absolute top-4 right-35 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          {totalQuantity > 0 && (
            <span className="relative -top-3 -right-2 bg-red-600 text-white px-2 rounded-3xl text-xs font-bold cart-num">
              {totalQuantity}
            </span>
          )}
        </Link>
        {isLogin ? (
          <User />
        ) : (
          <Link
            to="/Login"
            className="ml-2 px-5 py-1 bg-[#f5e6e0] text-[#12004d] rounded-xl font-semibold shadow hover:bg-[#e5d6d0] transition-colors"
          >
            Login
          </Link>
        )}
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 transparent bg-opacity-100 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#12004d] z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 md:hidden`}
      >
        <div className="flex flex-col gap-6 p-6 pt-10">
          <Link
            to="/Shop"
            className="Nav-links text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="Nav-links text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="Nav-links text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/review"
            className="Nav-links text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="/FAQ"
            className="Nav-links text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/Cart"
            className="Nav-links text-white text-lg relative"
            onClick={() => setMenuOpen(false)}
          >
            Cart
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white px-2 rounded-3xl text-xs font-bold">
                {totalQuantity}
              </span>
            )}
          </Link>
          {isLogin ? (
            <User />
          ) : (
            <Link
              to="/Login"
              className="px-6 text-center py-1 bg-[#f5e6e0] text-[#12004d] border-2 border-blue-200  rounded-xl font-semibold hover:bg-blue-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
        <Link
          to="/"
          className="px-6 text-center py-1 bg-[#f5e6e0] text-[#12004d] border-2 border-blue-200  rounded-xl font-semibold hover:bg-blue-900 transition-colors relative left-6"
          onClick={() => setMenuOpen(false)}
        >
          Shop
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
