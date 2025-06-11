import mongoose from "mongoose";


const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    ISBN: { type: String, unique: true },
    genre: { type: String },
    publicationDate: { type: Date },
    copies: { type: Number, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
