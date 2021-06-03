const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const BookAuthorController = require("./controller/BookAuthorController");
const BookController = require("./controller/BookController");
const BookTransactionController = require("./controller/BookTransactionController");
const UserController = require("./controller/UserController");
const FeedbackController = require("./controller/FeedbackController");

// Import fakeData
const fakeData = require("./model/fakeData");
const fakeCategories = require("./model/fakeCategories");

// Declier the port
const port = process.env.PORT || 5000;

// Initialize the express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect the database with mongoose
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s0sj8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connect successfully"))
  .catch((err) => console.log(err));

// Check server status
app.get("/", (req, res) => {
  res.status(200).json("Server running");
});

// App route
app.use("/bookAuthor", BookAuthorController);
app.use("/book", BookController);
app.use("/bookTransaction", BookTransactionController);
app.use("/user", UserController);
app.use("/feedback", FeedbackController);

// Mobile app book API
app.use("/books", (req, res) => {
  res.status(200).json({
    messages: "Sussess",
    data: fakeData,
  });
});

app.use("/categories", (req, res) => {
  res.status(200).json({
    messages: "Sussess",
    data: fakeCategories,
  });
});

// Start server to listen HTTP request
app.listen(process.env.PORT || port, () => {
  console.log("listening on port", port);
});
