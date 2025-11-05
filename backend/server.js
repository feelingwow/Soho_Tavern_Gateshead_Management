import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import checklistRoutes from "./src/routes/checklistRoutes.js";
import errorHandler from "./src/middleware/errorHandler.js";

dotenv.config();
const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/checklist", checklistRoutes);

// Root
app.get("/", (req, res) => res.send("✅ Soho Tavern API Running..."));

// Error handler (must be at the end)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
