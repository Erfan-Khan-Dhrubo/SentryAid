import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

// Routes
import userRoutes from "./routes/userRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

// DB
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/notifications", notificationRoutes);

// Connect to DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on port:", PORT);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  });
