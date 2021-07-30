const express = require("express");
const Product = require("../model/product");
const app = express();

app.get("/:id", async (req, res) => {
    var id = req.params.id;
    var productInfo = await Product.find({
        _id: id,
    }).lean();

    var productosRelacionadosData = await Product.find({
        Collection_Name: productInfo[0].Collection_Name,
    }).lean();

    for (let i = 0; i < productosRelacionadosData.length; i++) {
        if (productosRelacionadosData[i]["_id"] === id) {
            productosRelacionadosData.splice(i, 1);
        }
    }

    var rnd1 = parseInt(Math.random() * productosRelacionadosData.length);
    var rnd2 = parseInt(Math.random() * productosRelacionadosData.length);
    var rnd3 = parseInt(Math.random() * productosRelacionadosData.length);

    while (
        rnd1 === id ||
        rnd2 === id ||
        rnd3 === id ||
        rnd1 === rnd2 ||
        rnd2 === rnd3 ||
        rnd3 === rnd1
    ) {
        if (rnd1 === rnd2) {
            rnd1 = parseInt(Math.random() * productosRelacionadosData.length);
        } else if (rnd2 === rnd3) {
            rnd2 = parseInt(Math.random() * productosRelacionadosData.length);
        } else if (rnd3 === rnd1) {
            rnd3 = parseInt(Math.random() * productosRelacionadosData.length);
        }
    }

    var productosRelacionados = [];

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            productosRelacionados[i] = productosRelacionadosData[rnd1];
        } else if (i === 1) {
            productosRelacionados[i] = productosRelacionadosData[rnd2];
        } else {
            productosRelacionados[i] = productosRelacionadosData[rnd3];
        }
    }

    res.render("producto", {
        productInfo: productInfo,
        productosRelacionados: productosRelacionados,
    });
});

module.exports = app;
