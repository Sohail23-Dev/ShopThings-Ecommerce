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
    <nav className="nav-container">
      {/* Hamburger for mobile (top left) */}
      <div className="nav-hamburger">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="nav-hamburger-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#2563eb"
            className="nav-hamburger-icon"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Left: Logo (hidden on mobile) */}
      <div className="nav-logo-container">
        <span className="nav-logo">
          <span className="nav-logo-bold">
            Shop
            <span className="nav-logo-blue">Things</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#2563eb"
            className="nav-logo-icon"
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
      <div className="nav-links-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Shop" className="nav-link">
          Shop
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
        <Link to="/review" className="nav-link">
          Reviews
        </Link>
        <Link to="/FAQ" className="nav-link">
          FAQ
        </Link>

        <div className="nav-search-container" ref={searchInputRef}>
          <div className="nav-search-inner">
            <input
              type="text"
              autoFocus={showSearch}
              placeholder="Search products..."
              value={search}
              onChange={handleSearch}
              className={`nav-search-input${
                showSearch ? " nav-search-input-active" : ""
              }`}
            />
            <svg
              className="nav-search-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              onClick={() => setShowSearch(true)}
              aria-label="Show search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
      {/* Right: Cart, Login/User, Shop Button */}
      <div className="nav-right">
        <Link to="/Cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="white"
            className="cart-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          {totalQuantity > 0 && (
            <span className="cart-num">{totalQuantity}</span>
          )}
        </Link>
        {isLogin ? (
          <User />
        ) : (
          <Link to="/Login" className="nav-login-btn">
            Login
          </Link>
        )}
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="nav-mobile-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <div
        className={`nav-mobile-menu${menuOpen ? " nav-mobile-menu-open" : ""}`}
      >
        <div className="nav-mobile-links">
          <Link
            to="/Shop"
            className="nav-link nav-link-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="nav-link nav-link-mobile"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="nav-link nav-link-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/review"
            className="nav-link nav-link-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="/FAQ"
            className="nav-link nav-link-mobile"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/Cart"
            className="nav-link nav-link-mobile nav-link-cart"
            onClick={() => setMenuOpen(false)}
          >
            Cart
            {totalQuantity > 0 && (
              <span className="cart-num cart-num-mobile">{totalQuantity}</span>
            )}
          </Link>
          {isLogin ? (
            <User />
          ) : (
            <Link
              to="/Login"
              className="nav-login-btn nav-login-btn-mobile"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
        <Link
          to="/"
          className="nav-login-btn nav-login-btn-mobile nav-mobile-shop-btn"
          onClick={() => setMenuOpen(false)}
        >
          Shop
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
