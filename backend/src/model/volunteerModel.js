import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name must be provided
    },
    request: {
      type: String,
      default: "pending", // Defaults to empty string if not provided
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
  }
);

const Volunteer = mongoose.model("volunteer", volunteerSchema);

export default Volunteer;
