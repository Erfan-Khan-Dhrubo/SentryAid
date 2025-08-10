import React from "react";
import UserNavbar from "../Components/Navbar/UserNavbar"; // Assuming UserNavbar is your sidebar

const ViewProfile = () => {
  // Placeholder data - replace with actual data fetching from backend
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown",
    bloodGroup: "A+",
    allergies: "None",
    medicalConditions: "None",
  };

  return (
    <div className="flex">
      <UserNavbar /> {/* Placeholder for the sidebar */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Your Profile</h2>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Phone:</strong> {userProfile.phone}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p><strong>Address:</strong> {userProfile.address}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Medical Information</h3>
          <p><strong>Blood Group:</strong> {userProfile.bloodGroup}</p>
          <p><strong>Allergies:</strong> {userProfile.allergies}</p>
          <p><strong>Medical Conditions:</strong> {userProfile.medicalConditions}</p>
        </div>

      </div>
    </div>
  );
};
export default ViewProfile;
