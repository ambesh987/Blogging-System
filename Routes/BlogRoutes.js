const express = require("express");
const app = express();
const {
  uploadData,
  updateLikes,
  allPost,
  searchPost,
  blog,
  publish
} = require("../Controller/BlogController");

app.post("/addblog", uploadData);
app.post("/updatelikes/:id", updateLikes);
app.get("/all", allPost);
app.get("/search", searchPost);
app.get("/:id", blog);
app.patch("/publish/:id",publish);

module.exports = app;