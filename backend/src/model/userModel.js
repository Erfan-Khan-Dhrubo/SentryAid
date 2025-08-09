import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name must be provided
    },
    request: {
      type: String,
      default: "not", // Defaults to empty string if not provided
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
  }
);

const User = mongoose.model("User", userSchema);

export default User;
