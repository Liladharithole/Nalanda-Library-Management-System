import express from "express";
import {
  borrowBook,
  returnBook,
  borrowHistory,
} from "../controllers/borrowController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/borrow", protect, borrowBook);
router.post("/return", protect, returnBook);
router.get("/history", protect, borrowHistory);



export default router;
