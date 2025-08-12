import React from "react";
import { FaUser, FaTachometerAlt, FaUserShield } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { NavLink } from "react-router";

const AdminSidebar = ({ userInfo }) => {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col justify-between min-h-screen">
      <div>
        <div className="p-4 font-bold text-2xl text-pink-600">SentryAid</div>
        <nav className="mt-6 space-y-2 middle">
          <NavLink
            to={`/users/${userInfo._id}`}
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-pink-50 rounded-lg"
          >
            <FaTachometerAlt className="mr-3" /> Dashboard
          </NavLink>
          <NavLink
            to={"demo"}
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-pink-50 rounded-lg"
          >
            <FaUser className="mr-3" /> User
          </NavLink>
          <NavLink
            to={"/admin"}
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-pink-50 rounded-lg"
          >
            <FaUserShield className="mr-3" /> Admin Panel
          </NavLink>
          <NavLink
            to={"alertMessage"}
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-pink-50 rounded-lg"
          >
            <FaMessage className="mr-3" /> Message
          </NavLink>
        </nav>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2021/09/09/User-avatar-profile-icon-Graphics-17068385-1.jpg"
            alt="Profile"
            className="w-14 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{userInfo.name}</p>
            <p className="text-xs text-gray-500">{userInfo.type}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
