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
    const {
      name,
      email,
      phone,
      address,
      bloodGroup,
      allergies,
      medicalCondition,
      type,
      request,
      status,
    } = req.body;

    const user = new Volunteer({
      name,
      email,
      phone,
      address,
      bloodGroup,
      allergies,
      medicalCondition,
      type,
      request,
      status,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error in createUser controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateUser(req, res) {
  try {
    const {
      name,
      email,
      phone,
      address,
      bloodGroup,
      allergies,
      medicalCondition,
      type,
      request,
      status,
    } = req.body;

    const updatedUser = await Volunteer.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
        address,
        bloodGroup,
        allergies,
        medicalCondition,
        type,
        request,
        status,
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error in updateUser controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteUser(req, res) {
  try {
    const deleteUser = await Volunteer.findByIdAndDelete(req.params.id);

    if (!deleteUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json(deleteUser);
  } catch (error) {
    console.error("error in deleteNotes controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}
