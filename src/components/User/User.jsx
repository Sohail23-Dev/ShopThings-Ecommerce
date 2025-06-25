import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Menu, MenuButton, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <Menu>
        <MenuButton
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
        >
          <PersonIcon className="text-gray-600" />
        </MenuButton>
        <Menu.Items
          className="absolute right-0 mt-[210px] w-48 py-2 bg-white shadow-lg rounded-md border border-gray-200"
        >
          <MenuItem>
          <Link to="/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200">
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