// import express from "express";
// import { createChecklist, getChecklists } from "../controllers/checklistController.js";
// import { protect } from "../middleware/authMiddleware.js"; // ✅ import added

// const router = express.Router();

// router.post("/", protect, createChecklist);
// router.get("/", protect, getChecklists);

// export default router;

// backend/src/routes/checklistRoutes.js
import express from "express";
import { saveChecklist, getAllChecklists, getChecklistByDate } from "../controllers/checklistController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, saveChecklist);           // create or update
router.get("/", protect, getAllChecklists);         // list
router.get("/:date", protect, getChecklistByDate);  // single by date

export default router;
