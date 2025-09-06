import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  // Check if volunteer, admin, or user is logged in
  const volunteerData = localStorage.getItem("volunteer");
  const adminData = localStorage.getItem("admin");
  const userData = localStorage.getItem("user");

  const handleVolunteerLogout = () => {
    localStorage.removeItem("volunteer");
    navigate("/"); // Redirect to home page
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("admin");
    navigate("/"); // Redirect to home page
  };

  const handleUserLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="sticky top-0 bg-pink-100 p-6 flex justify-between items-center border-b-2 border-pink-400 z-50">
      <div className="text-xl font-bold text-pink-600">SentryAid</div>

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
            className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition duration-300"
          >
            Logout (Admin)
          </button>
        )}

        {userData && (
          <button
            onClick={handleUserLogout}
            className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition duration-300"
          >
            Logout (User)
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
