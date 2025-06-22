import { React } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../features/filterSlice";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import products from "../Products";

const Nav = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  // Get unique categories from products
  const categories = [
    "all",
    ...Array.from(new Set(products.map((item) => item.category))),
  ];

  // Dispatch filter to redux
  const handleFilter = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <nav className="main-bar nav-container flex items-center justify-between bg-white shadow-sm px-8 py-2 sticky top-0 z-10">
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
          <path stroke="#2563eb" strokeWidth="2" d="M8 17l2 2 4-4" />
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
          className="Nav-links text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="Nav-links text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Contact us
        </Link>
        <Link
          to="/review"
          className="Nav-links text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Reviews
        </Link>
        <Link
          to="/FAQ"
          className="Nav-links text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          FAQ
        </Link>
        <Link
          to="/Cart"
          className="Nav-links text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Cart{" "}
          {quantity > 0 && (
            <span className="relative -top-2 bg-red-600 text-white px-2 rounded-3xl text-xs ml-1 font-bold">
              {quantity}
            </span>
          )}
        </Link>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1 text-base font-semibold text-gray-700 shadow-sm hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150">
            <FilterAltIcon className="!text-blue-600 !w-5 !h-5" />
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 ml-1 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
            />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1">
              {categories.map((cat) => (
                <Menu.Item key={cat}>
                  {({ active }) => (
                    <button
                      onClick={() => handleFilter(cat)}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-700"
                      }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Menu>
        <Link
          to="/Login"
          className="ml-4 px-5 py-1 border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
        >
          Login
        </Link>
        {/* Filter Dropdown */}
      </div>
    </nav>
  );
};

export default Nav;
