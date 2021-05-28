const express = require("express");
const router = express.Router();
const BookAuthor = require("../model/BookAuthor");

// Get all data
router.get("/", (req, res) => {
  BookAuthor.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "Oops... Something went wrong",
      });
    } else {
      res.status(200).json({
        data: data,
        messages: "Success",
      });
    }
  });
});

// Get single data using ID
router.get("/:id", (req, res) => {
  BookAuthor.find({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "Oops... Something went wrong",
      });
    } else {
      res.status(200).json({
        data: data,
        messages: "Success",
      });
    }
  });
});

// Post single data
router.post("/", (req, res) => {
  const newRow = new BookAuthor(req.body);
  newRow.save((err) => {
    if (err) {
      res.status(500).json({
        error: "Oops... Something went wrong",
      });
    } else {
      res.status(200).json({
        messages: "Data added successfully",
      });
    }
  });
});

// Update single data
router.put("/:id", (req, res) => {
  BookAuthor.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "Ops.... Somthing else. ",
        });
      } else {
        res.status(200).json({
          messages: "Data updated successfully",
        });
      }
    }
  );
});

// Delete single data
router.delete("/:id", async (req, res) => {
  await BookAuthor.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        messages: "Data deleted successfully",
      });
    }
  });
});

// Export router
module.exports = router;
