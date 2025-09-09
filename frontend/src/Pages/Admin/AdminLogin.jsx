import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null); // stores logged-in role
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Get volunteer, user, or admin from localStorage once on mount
  useEffect(() => {
    const volunteerStr = localStorage.getItem("volunteer");
    const userStr = localStorage.getItem("user");
    const adminStr = localStorage.getItem("admin");

    if (volunteerStr) setRole(JSON.parse(volunteerStr));
    else if (userStr) setRole(JSON.parse(userStr));
    else if (adminStr) setRole(JSON.parse(adminStr));
  }, []);

  // Check if someone is logged in
  const isLoggedIn = !!role;

  const handleDashboardNavigate = () => {
    if (!role) return;

    switch (role.type) {
      case "volunteer":
        navigate(`/volunteers/${role._id}`);
        break;
      case "user":
        navigate(`/users/${role._id}`);
        break;
      case "admin":
        navigate("/admin");
        break;
      default:
        break;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5001/api/admin/login", {
        name,
        password,
      });

      localStorage.setItem("admin", JSON.stringify(res.data));
      setRole(res.data); // triggers dashboard logic

      toast.success("Admin login successful! 🎉");
    } catch (err) {
      if (err.response) toast.error(err.response.data.message);
      else toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md px-12 py-16">
        {!isLoggedIn ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Admin Login
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
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="text-pink-400 font-semibold text-xl mb-4">
              You are already logged in as {role.name} ({role.type})
            </div>
            <button
              onClick={handleDashboardNavigate}
              className="bg-pink-400 text-white mt-6 px-6 py-2 rounded-lg hover:bg-pink-500 transition duration-300"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
