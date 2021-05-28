const express = require("express");
const router = express.Router();
const Feedback = require("../model/Feedback");

// Get all data
router.get("/", (req, res) => {
  Feedback.find({})
    .populate("book")
    .exec((err, data) => {
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
  Feedback.find({ _id: req.params.id })
    .populate("book")
    .exec((err, data) => {
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
  const newRow = new Feedback(req.body);
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
  Feedback.updateOne(
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
  await Feedback.deleteOne({ _id: req.params.id }, (err) => {
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
