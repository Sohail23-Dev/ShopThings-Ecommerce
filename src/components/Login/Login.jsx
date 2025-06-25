import React, { useState } from "react";
import "./Toggle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const [toggled, setToggled] = useState(false);

  // Handle input changes for both forms
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Register handler
  const handleRegister = async (e) => {
    e.preventDefault();
    if (form.password !== form.cpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("/api/auth/Register", {
        email: form.email,
        password: form.password,
      });
      alert(res.data.message || "Registered successfully");
      setToggled(false);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/Login", {
        email: form.email,
        password: form.password,
      });
      alert(res.data.message || "Login successful");
      localStorage.setItem("isLogin", "true");
      navigate("/");
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-8">
      <div className="perspective-1000 w-96">
        <div
          className={`flip-card-inner ${
            toggled ? "flipped" : ""
          } bg-transparent w-96 rounded-3xl shadow-xl border-2 border-blue-200 hover:border-purple-400 transition-all duration-300`}
        >
          {/* Front: Login */}
          <div className="flip-card-front bg-gradient-to-br from-sky-300 via-blue-200 to-purple-200 w-96 rounded-3xl shadow-xl p-8 absolute backface-hidden">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
              Login
            </h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <input
                className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200"
                placeholder="Enter your Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200"
                placeholder="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="accent-blue-500"
                />
                <label htmlFor="remember" className="text-gray-700 text-sm">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-400 to-blue-400 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-400 hover:to-purple-400 hover:scale-105 transition-transform duration-200 font-semibold tracking-wide"
              >
                Login
              </button>
            </form>
          </div>
          {/* Back: Register */}
          <div className="flip-card-back bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 w-96 rounded-3xl shadow-xl p-8 absolute backface-hidden rotate-y-180">
            <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center">
              Register
            </h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-5">
              <input
                className="px-4 py-3 rounded-xl border-2 border-green-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200"
                placeholder="Enter your Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                className="px-4 py-3 rounded-xl border-2 border-green-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200"
                placeholder="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <input
                className="px-4 py-3 rounded-xl border-2 border-green-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200"
                placeholder="Confirm Password"
                type="password"
                name="cpassword"
                value={form.cpassword}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-400 hover:to-green-400 hover:scale-105 transition-transform duration-200 font-semibold tracking-wide"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <button
        type="button"
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <div className="thumb"></div>
      </button>
    </div>
  );
};
export default Login;
