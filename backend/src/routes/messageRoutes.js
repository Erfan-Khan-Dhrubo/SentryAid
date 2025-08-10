import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.get("/", getAllMessage);
router.post("/", createMessage);
router.delete("/:id", deleteMessage);

export default router;
