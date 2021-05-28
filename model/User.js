const mongoose = require("mongoose");

// Define Model schema
const userSchema = mongoose.Schema({
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

  role: {
    type: String,
    enum: ["Free Member", "Premium Member", "VIP Member", "Admin"],
    default: "Free Member",
  },
});

// Create Model using schema
const User = new mongoose.model("User", userSchema);

// Export Model
module.exports = User;
