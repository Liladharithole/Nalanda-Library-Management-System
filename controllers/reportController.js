import BorrowRecord from '../models/BorrowRecord.js';
import Book from '../models/Book.js';
import User from '../models/User.js';

// 1. Most Borrowed Books
export const mostBorrowedBooks = async (req, res) => {
  try {
    const result = await BorrowRecord.aggregate([
      { $group: { _id: '$book', borrowCount: { $sum: 1 } } },
      { $sort: { borrowCount: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: '_id',
          as: 'book'
        }
      },
      { $unwind: '$book' }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Most Active Members
export const activeMembers = async (req, res) => {
  try {
    const result = await BorrowRecord.aggregate([
      { $group: { _id: '$user', borrowCount: { $sum: 1 } } },
      { $sort: { borrowCount: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'user'
        }
      },
      { $unwind: '$user' }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Book Availability Report
export const bookAvailability = async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();
    const allBooks = await Book.find();

    let totalCopies = 0;
    let availableCopies = 0;

    allBooks.forEach(book => {
      totalCopies += book.copies;
    });

    const borrowedCopies = await BorrowRecord.countDocuments({
      returnDate: null
    });

    res.json({
      totalBooks,
      totalCopies,
      borrowedCopies,
      availableCopies: totalCopies - borrowedCopies
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
