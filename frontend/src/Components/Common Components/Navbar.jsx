import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  // Check if volunteer or admin is logged in
  const volunteerData = localStorage.getItem("volunteer");
  const adminData = localStorage.getItem("admin");

  const handleVolunteerLogout = () => {
    localStorage.removeItem("volunteer");
    navigate("/"); // Redirect to home page
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("admin");
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="bg-pink-100 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-pink-600">My App</div>

      <div className="flex gap-4">
        {volunteerData && (
          <button
            onClick={handleVolunteerLogout}
            className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition duration-300"
          >
            Logout (Volunteer)
          </button>
        )}

        {adminData && (
          <button
            onClick={handleAdminLogout}
            className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Logout (Admin)
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
