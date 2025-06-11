import BorrowRecord from '../models/BorrowRecord.js';
import Book from '../models/Book.js';

// Borrow a book
export const borrowBook = async (req, res) => {
  const { bookId } = req.body;

  try {
    const book = await Book.findById(bookId);
    if (!book || book.copies <= 0) {
      return res.status(400).json({ message: 'Book not available' });
    }

    // Decrease book copy count
    book.copies -= 1;
    await book.save();

    const borrow = await BorrowRecord.create({
      user: req.user._id,
      book: bookId
    });

    res.status(201).json(borrow);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Return a book
// export const returnBook = async (req, res) => {
//   const { borrowId } = req.body;

//   try {
//     const borrow = await BorrowRecord.findById(borrowId).populate('book');
//     if (!borrow) return res.status(404).json({ message: 'Borrow record not found' });
//     if (borrow.returnDate) return res.status(400).json({ message: 'Book already returned' });

//     borrow.returnDate = new Date();
//     await borrow.save();

//     // Increase book copy count
//     borrow.book.copies += 1;
//     await borrow.book.save();

//     res.json({ message: 'Book returned successfully', borrow });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
export const returnBook = async (req, res) => {
    const { borrowId } = req.body;
  
    try {
      // Get the borrow record
      const borrow = await BorrowRecord.findById(borrowId);
      if (!borrow) return res.status(404).json({ message: 'Borrow record not found' });
      if (borrow.returnDate) return res.status(400).json({ message: 'Book already returned' });
  
      // Set return date
      borrow.returnDate = new Date();
      await borrow.save();
  
      // Increase book's copies
      const book = await Book.findById(borrow.book);
      book.copies += 1;
      await book.save();
  
      res.json({ message: 'Book returned successfully', borrow });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

// Borrowing history
export const borrowHistory = async (req, res) => {
  try {
    const history = await BorrowRecord.find({ user: req.user._id })
      .populate('book')
      .sort({ borrowDate: -1 });

    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
