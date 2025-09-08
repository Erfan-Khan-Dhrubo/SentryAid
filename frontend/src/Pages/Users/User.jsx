import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserSignup from "../../Components/User/UserSignup";
import UserLogin from "./UserLogin";

const User = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // Get volunteer, user, or admin from localStorage once on mount
  useEffect(() => {
    const volunteerStr = localStorage.getItem("volunteer");
    const userStr = localStorage.getItem("user");
    const adminStr = localStorage.getItem("admin");

    if (volunteerStr) {
      setRole(JSON.parse(volunteerStr));
    } else if (userStr) {
      setRole(JSON.parse(userStr));
    } else if (adminStr) {
      setRole(JSON.parse(adminStr));
    }
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

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md px-12 py-16">
        {!isLoggedIn ? (
          <>
            {/* Toggle Buttons */}
            <div className="flex justify-around mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-2 font-semibold ${
                  isLogin
                    ? "border-b-2 border-pink-600 text-pink-400"
                    : "text-gray-500"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 py-2 font-semibold ${
                  !isLogin
                    ? "border-b-2 border-pink-600 text-pink-400"
                    : "text-gray-500"
                }`}
              >
                Signup
              </button>
            </div>

            {/* Show Login or Signup Component */}
            {isLogin ? <UserLogin /> : <UserSignup />}
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

export default User;
