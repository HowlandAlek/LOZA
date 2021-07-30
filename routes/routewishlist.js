const express = require("express");
const Product = require("../model/product");
const app = express();

app.get("/", async (req, res) => {
    var productosDestacados = await Product.find({ Rarity: "High" }).lean();
    // Obtiene los productos destacados  
    res.render("wishlist", { productosDestacados });
});

module.exports = app;
