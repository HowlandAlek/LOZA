const express = require("express");
const Cart = require("../model/cart");
const Product = require("../model/product");
const app = express();

app.get("/", async (req, res) => {
    var cart = await Cart.find({}).lean();
    cart[0] = {
        Id: 23,
        Name: "I am Iron Man ",
        Img_Id: "1ixm_H3lVy9K0Ancywz5w7Iq_iPbClpNH",
        Price: "799",
    };
    console.log(cart);

    var total = 799;

    res.render("cart", { cart: cart, total: parseInt(total) });
});

app.post("/delete", (req, res) => {
    res.render("emptycart");
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
