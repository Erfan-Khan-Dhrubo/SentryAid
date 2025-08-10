import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Name is required
    },
    msg: {
      type: String,
      required: true, // Email is required
    },
    status: {
      type: Boolean,
      default: false, // Default role is "user"
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
