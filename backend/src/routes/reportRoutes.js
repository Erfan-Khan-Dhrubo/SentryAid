import express from "express";
import {
  createReport,
  getUserReports,
  getAllReports,
  updateReportStatus
} from "../controllers/reportController.js";

const router = express.Router();

router.post("/", createReport);
router.get("/user/:userId", getUserReports);
router.get("/", getAllReports);
router.patch("/:reportId/status", updateReportStatus);

export default router;