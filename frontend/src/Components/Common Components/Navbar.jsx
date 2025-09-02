import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  // Check if a volunteer is logged in
  const volunteerData = localStorage.getItem("volunteer");

  const handleLogout = () => {
    localStorage.removeItem("volunteer"); // Clear volunteer info
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="bg-pink-100 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-pink-600">My App</div>

      {volunteerData && (
        <button
          onClick={handleLogout}
          className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition duration-300"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
