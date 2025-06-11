import express from 'express';
import {
  addBook,
  updateBook,
  deleteBook,
  getBooks
} from '../controllers/bookController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getBooks)
  .post(protect, adminOnly, addBook);

router.route('/:id')
  .put(protect, adminOnly, updateBook)
  .delete(protect, adminOnly, deleteBook);

export default router;
