import Message from "../model/messageModel.js";

export async function getAllMessage(req, res) {
  try {
    const users = await Message.find().sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    console.error("error in getAllMessage controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function createMessage(req, res) {
  try {
    const { title, msg, status } = req.body;

    // Create a new user based on the schema
    const user = new Message({
      title,
      msg,
      status,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error in createMessage controller", error);
    res.status(500).json({ message: "Internals server error" });
  }
}

export async function deleteMessage(req, res) {
  try {
    const deleteUser = await Message.findByIdAndDelete(req.params.id);

    if (!deleteUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("error in deleteMessage controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}
