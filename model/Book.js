const mongoose = require("mongoose");

// Define Model schema
const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 1,
  },

  category: {
    type: String,
    enum: [
      "Arts & Music",
      "BioGraphies",
      "Computers & Tech",
      "Education",
      "Entertainment",
      "Health & Fitness",
      "History",
      "Kids",
      "Motivational Books",
      "Religion",
      "Romance",
    ],
  },

  author: {
    type: mongoose.Types.ObjectId,
    ref: "BookAuthor",
  },
});

// Create Model using schema
const Book = new mongoose.model("Book", bookSchema);

// Export Model
module.exports = Book;
