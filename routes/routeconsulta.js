const express = require("express");
const Product = require("../model/product");
const app = express();

app.get("/:query", async (req, res) => {
    // Obtiene los productos que coincidan con la busqueda
    var query = req.params.query;

    var productos = await Product.find({
        $or: [
            { Collection_ID: new RegExp(query) },
            { Name: new RegExp(query) },
            { Collection_Name: new RegExp(query) },
        ],
    });

    res.send(productos);
    res.render("consulta", { productos });
});

app.get("/", async (req, res) => {
    // Obtiene los productos que coincidan con la busqueda
    var query = req.params.query;

    var productos = await Product.find();
    res.send(productos);
});

module.exports = app;
