const mongoose = require("mongoose");

// Define Model schema
const bookTransactionSchema = mongoose.Schema({
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

  date: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: String,
    enum: ["Pending", "Approved", "Returned", "Received"],
    default: "Pending",
  },

  book: {
    type: mongoose.Types.ObjectId,
    ref: "Book",
  },
});

// Create Model using schema
const BookTransaction = new mongoose.model(
  "BookTransaction",
  bookTransactionSchema
);

// Export Model
module.exports = BookTransaction;
