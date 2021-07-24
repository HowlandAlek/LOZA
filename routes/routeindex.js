const express = require("express");
const User = require("../model/user");
const app = express();

app.get("/", async (req, res) => {
    User.deleteMany({ name: "ADMIN" }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Registros eliminados");
        }
    });
    var user = new User({
        name: "ADMIN",
        last_name: "",
        email: "lozadevteam@gmail.com",
        phone: "1234456",
        password: "sysadmin",
        orders: [],
        cart: [],
    });
    await user.save();
    res.render("index");
});

module.exports = app;
