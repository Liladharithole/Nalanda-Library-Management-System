import express from 'express';
import {
  mostBorrowedBooks,
  activeMembers,
  bookAvailability
} from '../controllers/reportController.js';

import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/most-borrowed', protect, adminOnly, mostBorrowedBooks);
router.get('/active-members', protect, adminOnly, activeMembers);
router.get('/book-availability', protect, adminOnly, bookAvailability);

export default router;
