const express = require("express");
const Product = require("../model/product");
const app = express();

app.get("/", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({ Collection_Name: "Mr. Robot" }).lean();
    res.render("mrrobot", { productos });
});

module.exports = app;
