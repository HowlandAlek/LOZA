const express = require("express");
const User = require("../model/user");
const Product = require("../model/product");

const app = express();

app.get("/", async(req, res) => {
    var productosDestacados = await Product.find({ Rarity: "High" }).lean();
    // Obtiene los productos destacados  
    res.render("index", { productosDestacados });

});

app.get("/todasColecciones", async(req, res) => {
    // Obtiene todos los productos
    var todosProductos = await Product.find().lean();
    console.log(todosProductos);
    res.render("consulta", { title: "Todas las colecciones", todosProductos });
});

module.exports = app;