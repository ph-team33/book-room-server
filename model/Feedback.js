const mongoose = require("mongoose");

// Define Model schema
const feedbackSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  book: {
    type: mongoose.Types.ObjectId,
    ref: "Book",
  },

  message: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 1,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

// Create Model using schema
const Feedback = new mongoose.model("Feedback", feedbackSchema);

// Export Model
module.exports = Feedback;
