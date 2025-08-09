import Volunteer from "./../model/volunteerModel.js";

export async function getAllUsers(req, res) {
  try {
    const users = await Volunteer.find().sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    console.error("error in getAllUsers controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function getUserById(req, res) {
  try {
    const user = await Volunteer.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("error in getUserById controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function createUser(req, res) {
  try {
    const { name, type } = req.body;

    const user = new Volunteer({ name, type });

    const saveUser = await user.save();

    res.status(201).json(saveUser);
  } catch (error) {
    console.error("error in createUser controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function updateUser(req, res) {
  try {
    const { name, type } = req.body;

    const updateUser = await Volunteer.findByIdAndUpdate(
      req.params.id,
      { name, type },
      { new: true }
    );

    if (!updateUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("error in updateUser controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function deleteUser(req, res) {
  try {
    const deleteUser = await Volunteer.findByIdAndDelete(req.params.id);

    if (!deleteUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("error in deleteNotes controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}
