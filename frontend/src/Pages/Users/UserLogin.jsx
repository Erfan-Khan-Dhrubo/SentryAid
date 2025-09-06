import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UserLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); // convert string → object
      setIsLoggedIn(true);
      setUser(parsedUser);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5001/api/users/login", {
        name,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));

      toast.success("user login successful! 🎉");
      navigate(`/users/${res.data._id}`);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-50">
        <div className="bg-white py-12 px-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            ✅ User already logged in
          </h2>
          <button
            onClick={() => navigate(`/users/${user._id}`)}
            className="mt-8 bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Go to User Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="bg-white py-16 px-12 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Name */}
          <div className="text-black">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="text-black">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
