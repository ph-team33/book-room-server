const mongoose = require("mongoose");

// Define Model schema
const bookAuthorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 1,
  },
});

// Create Model using schema
const BookAuthor = new mongoose.model("BookAuthor", bookAuthorSchema);

// Export Model
module.exports = BookAuthor;
