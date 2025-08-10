import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Required
    },
    email: {
      type: String,
      required: true, // Required
    },
    phone: {
      type: String,
      default: "", // Optional
    },
    address: {
      type: String,
      default: "", // Optional
    },
    bloodGroup: {
      type: String,
      default: "", // Optional
    },
    allergies: {
      type: String,
      default: "", // Optional
    },
    medicalCondition: {
      type: String,
      default: "", // Optional
    },
    type: {
      type: String,
      default: "volunteer", // Default role
    },
    request: {
      type: String,
      default: "pending", // Default request status
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt
  }
);

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export default Volunteer;
