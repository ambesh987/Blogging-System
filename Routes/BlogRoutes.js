const express = require("express");
const app = express();
const {
  uploadData,
  updateLikes,
  allPost,
  searchPost,
  blog,
} = require("../Controller/BlogController");

app.post("/upload", uploadData);
app.post("/updatelikes/:id", updateLikes);
app.get("/all", allPost);
app.get("/search", searchPost);
app.get("/:id", blog);

module.exports = app;