require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { mongoose } = require("./config/db");

const app = express();
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// for request body
app.use(express.json());

// API Router mount
app.use("/api", require("./routes"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Employee management backend running on port ${port}!`));

module.exports = app;
