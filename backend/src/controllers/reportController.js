import Report from "../model/reportModel.js";
import User from "../model/userModel.js";

export async function createReport(req, res) {
  try {
    const { title, message, userId } = req.body;

    // Validate required fields
    if (!title || !message || !userId) {
      return res.status(400).json({ 
        message: "Title, message, and userId are required" 
      });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create new report
    const newReport = new Report({
      title: title.trim(),
      message: message.trim(),
      userId: userId,
      userEmail: user.email,
      userName: user.name
    });

    const savedReport = await newReport.save();

    res.status(201).json({
      message: "Report submitted successfully",
      report: savedReport
    });

  } catch (error) {
    console.error("Error in createReport controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUserReports(req, res) {
  try {
    const { userId } = req.params;

    const reports = await Report.find({ userId })
      .sort({ createdAt: -1 })
      .select('-__v'); // Exclude version key

    res.status(200).json(reports);
  } catch (error) {
    console.error("Error in getUserReports controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getAllReports(req, res) {
  try {
    const reports = await Report.find()
      .sort({ createdAt: -1 })
      .populate('userId', 'name email') // Populate user info
      .select('-__v');

    res.status(200).json(reports);
  } catch (error) {
    console.error("Error in getAllReports controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateReportStatus(req, res) {
  try {
    const { reportId } = req.params;
    const { status } = req.body;

    if (!['pending', 'in-progress', 'resolved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedReport = await Report.findByIdAndUpdate(
      reportId,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({
      message: "Report status updated successfully",
      report: updatedReport
    });

  } catch (error) {
    console.error("Error in updateReportStatus controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}