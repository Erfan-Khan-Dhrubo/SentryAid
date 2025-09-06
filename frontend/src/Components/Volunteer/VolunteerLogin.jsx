import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import axios from "axios";

const VolunteerLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("📡 Attempting to login with:", { name, password }); // log before sending

    try {
      const res = await axios.post(
        "http://localhost:5001/api/volunteers/login",
        { name, password }
      );

      console.log("✅ Backend response:", res.data); // log the response

      // Save to localStorage
      localStorage.setItem("volunteer", JSON.stringify(res.data));

      // Show success message
      toast.success("Login successful! 🎉");

      // Navigate to volunteer dashboard
      navigate(`/volunteers/${res.data._id}`);
    } catch (err) {
      console.error("❌ Login error:", err); // log full error for debugging

      if (err.response) {
        toast.error(err.response.data.message); // server returned error
      } else {
        toast.error("Something went wrong. Please try again."); // network or CORS issue
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 pt-6">
        Volunteer Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Name */}
        <div className="text-black">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
        </div>

        {/* Password */}
        <div className="text-black">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default VolunteerLogin;
