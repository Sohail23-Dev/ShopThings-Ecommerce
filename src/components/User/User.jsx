import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Menu, MenuButton, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");

  const [avatarPreview, setAvatarPreview] = useState(null);
  const userEmail = localStorage.getItem("userEmail");
  const api = import.meta.env.VITE_API_URL || "";

  const [res, setRes] = useState({ user: [] });
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.post(`${api}/api/auth/updateProfile`, {
          email: userEmail,
        });
        setRes(res.data);
        if (res.data && res.data.avatar) {
          setAvatarPreview(res.data.avatar);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [userEmail, api]);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
    window.location.reload(); // Force page refresh after logout
  };

  // setAvatarPreview should not be called here; handled in useEffect above
  return (
    <>
      <Menu>
        <MenuButton className="user-menu-btn">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt={res}              className="user-avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=User";
                setAvatarPreview("https://ui-avatars.com/api/?name=User");
              }}
            />
          ) : (
            <PersonIcon className="user-avatar-icon bg-amber-50 rounded-3xl" />
          )}
        </MenuButton>
        <Menu.Items className="user-menu-items">
          <MenuItem>
            <Link to="/Profile" className="user-menu-link">
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <a href="#" className="user-menu-link">
              Order
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" className="user-menu-link">
              History
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" className="user-menu-link" onClick={handleLogout}>
              Logout
            </a>
          </MenuItem>
        </Menu.Items>
      </Menu>
    </>
  );
};
export default User;
