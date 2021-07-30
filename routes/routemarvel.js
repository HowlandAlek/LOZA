const express = require("express");
const Product = require("../model/product");
const app = express();

app.get("/", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({ Collection_Name: "Marvel" }).lean();
    res.render("marvel", { productos });
});

app.get("/p1", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({
        Collection_Name: "Marvel",
    })
        .sort([["Price", -1]])
        .lean();

    res.render("marvel", { productos });
});

app.get("/p2", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({
        Collection_Name: "Marvel",
    })
        .sort([["Price", 1]])
        .lean();

    res.render("marvel", { productos });
});

app.get("/alf", async (req, res) => {
    // Obtiene todos los productos de la colección
    var productos = await Product.find({
        Collection_Name: "Marvel",
    })
        .sort([["Name", 1]])
        .lean();

    res.render("marvel", { productos });
});

module.exports = app;
