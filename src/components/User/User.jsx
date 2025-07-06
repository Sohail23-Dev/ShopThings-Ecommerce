import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Menu, MenuButton, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL || "";
    const email = localStorage.getItem("userEmail");
    if (!email) {
      console.log("No user email found. Please login.");
      return;
    }
    axios
      .post(`${api}/api/auth/Profile`, { email })
      .then((res) => {
        setAvatar(res.data.user.avatar);
      })
      .catch(() => {
        console.log("Failed to fetch user profile.");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
    window.location.reload(); // Force page refresh after logout
  };

  return (
    <>
      <Menu>
        <MenuButton className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer overflow-hidden">
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=User";
                setAvatar("https://ui-avatars.com/api/?name=User");
              }}
            />
          ) : (
            <PersonIcon className="text-gray-600" />
          )}
        </MenuButton>
        <Menu.Items className="absolute right-0 mt-[210px] w-48 py-2 bg-white shadow-lg rounded-md border border-gray-200">
          <MenuItem>
            <Link
              to="/Profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              Order
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              History
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
              onClick={handleLogout}
            >
              Logout
            </a>
          </MenuItem>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default User;
