import React, { useState } from "react";
import { FaUser, FaBell, FaTachometerAlt, FaUserShield } from "react-icons/fa";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import NewVolunteerReq from "../../Components/Admin/NewVolunteerReq";
import UserToVolunteerReq from "../../Components/Admin/UserToVolunteerReq";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("abc");

  const abc = [
    {
      name: "John Doe",
      email: "john@example.com",
      location: "Dhaka",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      location: "Chittagong",
    },
  ];
  const bc = [
    {
      name: "Johnn Doe",
      email: "john@example.com",
      location: "Dhaka",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      location: "Chittagong",
    },
  ];

  return (
    <div className="flex min-h-screen bg-pink-50">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-gray-500">
            Manage volunteers and emergency broadcasts
          </p>
        </div>

        <div className="mt-6">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-4 rounded-xl overflow-hidden">
            <button
              onClick={() => setActiveTab("abc")}
              className={`px-4 py-2  flex-1 ${
                activeTab === "abc"
                  ? "bg-pink-400 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Approve New Volunteers
            </button>
            <button
              onClick={() => setActiveTab("bc")}
              className={`px-4 py-2  flex-1 ${
                activeTab === "bc"
                  ? "bg-pink-400 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Approve User Volunteer Requests
            </button>
          </div>

          {/* Content */}
          {activeTab === "abc" && <NewVolunteerReq abc={abc} />}
          {activeTab === "bc" && <UserToVolunteerReq bc={bc} />}
        </div>
      </main>
    </div>
  );
};

export default Admin;
