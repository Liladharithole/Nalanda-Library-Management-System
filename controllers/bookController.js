import Book from "../models/Book.js";

// Add a new book (Admin)
export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a book (Admin)
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a book (Admin)
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get books (All users, with filters & pagination)
export const getBooks = async (req, res) => {
  try {
    const { genre, author, page = 1, limit = 10 } = req.query;
    const query = {};
    if (genre) query.genre = genre;
    if (author) query.author = author;

    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Book.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      books,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
