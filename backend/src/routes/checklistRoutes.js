import express from "express";
import { createChecklist, getChecklists } from "../controllers/checklistController.js";
import { protect } from "../middleware/authMiddleware.js"; // ✅ import added

const router = express.Router();

router.post("/", protect, createChecklist);
router.get("/", protect, getChecklists);

export default router;
