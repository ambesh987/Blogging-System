const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoutes = require("./Routes/BlogRoutes");

//Middleware
app.use(express.json());
app.use("/post", blogRoutes);

//Connecting to the database (Mongo Atlas)
const db = `mongodb+srv://ambeshom:1234@cluster0.cwiip.mongodb.net/blog`;
mongoose.connect(db, () => {
  console.log("database is connected");
});

const port = process.env.port || 3030;
app.listen(port, () => console.log("server is listening"));