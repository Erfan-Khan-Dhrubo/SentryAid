import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessage,
  updateMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.get("/", getAllMessage);
router.post("/", createMessage);
router.put("/:id", updateMessage);
router.delete("/:id", deleteMessage);

export default router;
