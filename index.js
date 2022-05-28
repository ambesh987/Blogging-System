const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoutes = require("./Routes/BlogRoutes");

require('dotenv').config()
const db= process.env.Db;



//Middleware

app.use(express.json());
app.use("/post", blogRoutes);

//Connecting to the database (Mongo Atlas)

mongoose.connect(db, () => {
  console.log("database is connected");
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log("server is listening"));
