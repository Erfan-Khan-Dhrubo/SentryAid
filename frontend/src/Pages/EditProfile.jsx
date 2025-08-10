import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1234 567890",
    location: "Dhaka, Bangladesh",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition"
          >
            Save Changes
          </button>
        </form>

        <div className="mt-4">
          <a
            href="/viewprofile"
            className="block text-center text-pink-500 hover:underline"
          >
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
