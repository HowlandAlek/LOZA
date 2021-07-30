const express = require("express");
const Cart = require("../model/cart");
const app = express();

app.get("/", async (req, res) => {
    var cart = await Cart.find({}).lean();
    var total = 0;

    console.log(cart);

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

    console.log(cart);

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].Price;
    }
    res.render("cart", { cart: cart, total: parseInt(total) });
});

app.post("/add", async (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var img_id = req.body.img_id;
    var price = req.body.price;

    var nuevoItem = {
        Id: id,
        Name: name,
        Img_Id: img_id,
        Price: price,
    };

    await User.updateOne({ name: "L O Z A" }, { cart: nuevoItem });
    res.send(nuevoItem);
    res.redirect("/");
});

module.exports = app;
