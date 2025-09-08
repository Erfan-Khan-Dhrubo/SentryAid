import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateBulletinMsg = () => {
  const [role, setRole] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    title: "",
    msg: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only check volunteer and user, ignore admin
    const volunteer = localStorage.getItem("volunteer");
    const user = localStorage.getItem("user");

    let storedRole = null;

    if (volunteer) storedRole = JSON.parse(volunteer);
    else if (user) storedRole = JSON.parse(user);

    if (storedRole) {
      setRole(storedRole);
      // Pre-fill name and type
      setFormData((prev) => ({
        ...prev,
        name: storedRole.name,
        type: storedRole.type || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, type, title, msg } = formData;

    if (!title || !msg) {
      alert("All fields are required!");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:5001/api/bulletinMsg", {
        name,
        type,
        title,
        msg,
      });
      alert("Bulletin message created successfully!");
      setFormData({
        name: role ? role.name : "",
        type: role ? role.type : "",
        title: "",
        msg: "",
      });
    } catch (error) {
      console.error("Error creating bulletin message", error);
      alert("Failed to create bulletin message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Bulletin Message</h2>

      {role && (
        <p className="mb-4 text-gray-600">
          Logged in as: {role.name} ({role.type})
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!role && (
          <div>
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        )}

        {!role && (
          <div>
            <label className="block mb-1">Type:</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        )}

        <div>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Message:</label>
          <textarea
            name="msg"
            value={formData.msg}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateBulletinMsg;
