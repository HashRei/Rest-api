const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const postRoute = require("./routes/posts");

// Middleware
app.use("/posts", postRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to my Mongo DB!!!!!!!!!");
});

app.listen(3000);
