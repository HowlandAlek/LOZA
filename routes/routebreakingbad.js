const express = require("express");
const Product = require("../model/product");
const app = express();

app.get("/", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({
        Collection_Name: "Breaking Bad",
    }).lean();

    res.render("breakingbad", { productos });
});

module.exports = app;
