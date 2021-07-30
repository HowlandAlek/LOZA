const express = require("express");
const Product = require("../model/product");
const app = express();

app.get("/:query", async(req, res) => {
    // Obtiene los productos que coincidan con la busqueda
    var query = req.params.query;
    var todosProductos = await Product.find({
        $or: [
            { Collection_ID: new RegExp(query) },
            { Name: new RegExp(query) },
            { Collection_Name: new RegExp(query) },
        ],
    }).lean();

    //es.send(todosProductos);
    res.render("consulta", { title: "Resultados para " + '"' + query + '"', todosProductos: todosProductos });
});

app.get("/", async(req, res) => {
    // Obtiene los productos que coincidan con la busqueda
    var query = req.params.query;

    var productos = await Product.find().lean();
    res.send(productos);
});

module.exports = app;