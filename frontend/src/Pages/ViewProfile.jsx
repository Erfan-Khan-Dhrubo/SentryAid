import React from "react";
import UserNavbar from "../Components/Navbar/UserNavbar"; // Assuming UserNavbar is your sidebar
import './ViewProfile.css'; // We'll create this CSS file

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
    <div className="view-profile-container">
      <UserNavbar /> {/* Placeholder for the sidebar */}
      <div className="view-profile-content">
        <h2>Your Profile</h2>

        <div className="profile-card">
          <h3>Personal Details</h3>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Phone:</strong> {userProfile.phone}</p>
        </div>

        <div className="profile-card">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> {userProfile.address}</p>
        </div>

        <div className="profile-card">
          <h3>Medical Information</h3>
          <p><strong>Blood Group:</strong> {userProfile.bloodGroup}</p>
          <p><strong>Allergies:</strong> {userProfile.allergies}</p>
          <p><strong>Medical Conditions:</strong> {userProfile.medicalConditions}</p>
        </div>

        {/* You can add more sections/cards as needed */}
      </div>
    </div>
  );
};
export default ViewProfile;
