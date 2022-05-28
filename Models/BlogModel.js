const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({

  title: { required: true, type: String },
  description: { required: true, type: String },
  label: [{ type: String }],
  likes: { type: Number, default: 0 },
  author: { required: true, type: String },
  
});

module.exports = mongoose.model("blog", BlogSchema);