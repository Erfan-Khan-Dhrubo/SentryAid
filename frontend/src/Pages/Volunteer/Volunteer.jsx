import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import VolunteerLogin from "../../Components/Volunteer/VolunteerLogin";
import VolunteerSignup from "../../Components/Volunteer/VolunteerSignup";

const Volunteer = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [volunteerId, setVolunteerID] = useState("");
  const navigate = useNavigate();

  // Get volunteer from localStorage once on mount
  useEffect(() => {
    const volunteerData = localStorage.getItem("volunteer");
    if (volunteerData) {
      const volunteer = JSON.parse(volunteerData);
      setVolunteerID(volunteer._id); // set volunteer ID
    }
  }, []);

  // Check if a volunteer is logged in
  const isLoggedIn = !!volunteerId;

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
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

            {/* Show Component */}
            {isLogin ? <VolunteerLogin /> : <VolunteerSignup />}
          </>
        ) : (
          <div className="text-center">
            <div className="text-pink-400 font-semibold text-xl mb-4">
              You are already logged in.
            </div>
            <button
              onClick={() => navigate(`/volunteers/${volunteerId}`)}
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

export default Volunteer;
