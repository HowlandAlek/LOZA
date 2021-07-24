const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("mrrobot");
});

module.exports = app;
