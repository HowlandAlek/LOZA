const express = require("express");
const User = require("../model/user");
const Product = require("../model/product");
const app = express();

app.get("/", async(req, res) => {
    var productosDestacados = await Product.find({ Rarity: "High" });
    // Obtiene los productos destacados  

    res.render("index", { productosDestacados });
});

app.get("/todasColecciones", async(req, res) => {
    // Obtiene todos los productos
    var todosProductos = await Product.find();
    res.render("consulta", { todosProductos });
});

module.exports = app;