import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router";

const VolunteerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send signup request
      const res = await axios.post("http://localhost:5001/api/volunteers", {
        name,
        email,
        password,
      });

      // Save the returned volunteer info in localStorage
      //localStorage.setItem("volunteer", JSON.stringify(res.data));

      // Navigate to dashboard or home page
      //navigate(`/volunteers/${res.data._id}`); // or "/" if you prefer
      alert(
        "Your signup request has been sent for review. We will notify you by email."
      );

      navigate("/");
    } catch (error) {
      console.error("Error creating volunteer", error);
    } finally {
      setLoading(false);
    }

    console.log("Signup with:", { name, email, password });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 pt-6">
        Volunteer Signup
      </h2>

      <form onSubmit={handleSignup} className="space-y-4">
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

        {/* Email */}
        <div className="text-black">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          disabled={loading}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default VolunteerSignup;
