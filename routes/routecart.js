const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("Si jalan los commits masterz");
    res.render("cart");
});

module.exports = app;
