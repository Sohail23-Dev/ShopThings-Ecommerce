import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [avatarPreview, setAvatarPreview] = useState(null);
  // const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      setError("No user email found. Please login.");
      setLoading(false);
      return;
    }
    axios
      .post("/api/auth/Profile", { email })
      .then((res) => {
        setUser(res.data.user);
        setEditUser(res.data.user); // Set initial edit state
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch user profile.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!user) return null;

  const handleEditChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setEditUser({ ...editUser, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      // Send updated profile to backend (avatar as base64 string)
      const res = await axios.post("/api/auth/updateProfile", {
        email: editUser.email,
        phone: editUser.phone,
        address: editUser.address,
        avatar: editUser.avatar || avatarPreview || user.avatar,
      });
      setUser(res.data.user);
      setEditUser(res.data.user);
      setAvatarPreview(null);
      setEditMode(false);
      setLoading(false);
    } catch (e) {
      setError(`Failed to update profile. ${e}`);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <img
        src={
          avatarPreview ||
          user.avatar ||
          "https://randomuser.me/api/portraits/men/32.jpg"
        }
        alt="User Avatar"
        className="w-28 h-28 rounded-full border-4 border-blue-200 shadow mb-4"
      />
      {editMode && (
        <input
          type="file"
          accept="image/*"
          className="mb-2"
          onChange={handleAvatarChange}
        />
      )}
      {editMode ? (
        <>
          <p className="text-gray-500 mb-4 text-center border-b border-blue-100 outline-none cursor-not-allowed select-none opacity-60">
            {editUser.email}
          </p>
        </>
      ) : (
        <>
          <p className="text-gray-500 mb-4">{user.email}</p>
        </>
      )}
      <div className="w-full flex flex-col gap-2 text-gray-700 text-base">
        {/* Username row removed, as it's above */}
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">Phone:</span>
          {editMode ? (
            <input
              className="border-b border-blue-100 outline-none flex-1 text-right bg-transparent"
              name="phone"
              value={editUser.phone || ""}
              onChange={handleEditChange}
            />
          ) : (
            <span>{user.phone || "-"}</span>
          )}
        </div>
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">Address:</span>
          {editMode ? (
            <input
              className="border-b border-blue-100 outline-none flex-1 text-right bg-transparent"
              name="address"
              value={editUser.address || ""}
              onChange={handleEditChange}
            />
          ) : (
            <span>{user.address || "-"}</span>
          )}
        </div>
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">Joined:</span>
          <span className="cursor-not-allowed select-none opacity-60">
            {user.joined || "-"}
          </span>
        </div>
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">Orders:</span>
          <span>{user.orders || "-"}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-semibold">Membership:</span>
          <span className="text-blue-600 font-bold">
            {user.membership || "-"}
          </span>
        </div>
      </div>
      {editMode ? (
        <div className="flex gap-4 mt-8">
          <button
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow transition-all"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-full shadow transition-all"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow transition-all"
          onClick={() => setEditMode(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default Profile;
