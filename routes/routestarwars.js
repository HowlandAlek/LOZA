const express = require("express");
const Product = require("../model/product");
const app = express();

app.get("/", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({ Collection_Name: "StarWars" }).lean();
    res.render("starwars", { productos });
});

app.get("/p1", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({
        Collection_Name: "StarWars",
    })
        .sort([["Price", -1]])
        .lean();

    res.render("starwars", { productos });
});

app.get("/p2", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({
        Collection_Name: "StarWars",
    })
        .sort([["Price", 1]])
        .lean();

    res.render("starwars", { productos });
});

app.get("/alf", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({
        Collection_Name: "StarWars",
    })
        .sort([["Name", 1]])
        .lean();

    res.render("starwars", { productos });
});

module.exports = app;
