const express = require("express");
const Cart = require("../model/cart");
const Product = require("../model/product");
const app = express();

app.get("/", async (req, res) => {
    var cart = await Cart.find({}).lean();
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].Price;
    }

    res.render("cart", { cart: cart, total: parseInt(total) });
});

app.get("/delete/:id", async (req, res) => {
    var id = req.params.id;
    await Cart.deleteOne({ Id: id });

    var cart = await Cart.find({}).lean();
    var total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].Price;
    }
    res.render("cart", { cart: cart, total: parseInt(total) });
});

app.get("/add/:id", async (req, res) => {
    var id = req.params.id;
    var queryAdd = await Product.find({
        _id: id,
    }).lean();

    console.log(queryAdd[0].Img_Id);

    await Cart.insertMany({
        Id: queryAdd[0]._id,
        Name: queryAdd[0].Name,
        Price: queryAdd[0].Price,
        img_id: queryAdd[0].Img_Id,
    });

    res.redirect(`/producto/${id}`);
});

module.exports = app;
