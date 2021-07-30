const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user");
const app = express();

app.get("/", async (req, res) => {
    
    var r = "Rene";
    var user = await User.findOne({user_id: req.name});
    
    /*console.log(user);

    console.log(user.name); */

    res.render("account", {user: user});
});

/*
// Ruta para efectuar la actualizacion de los datos utilizando el metodo update()
app.post('/account',   async(req,res) =>{

    console.log(req.body);
    //req.body.name o algo
    var id = req.params.id;
    await Task.updateOne({_id: id}, req.body)
    res.redirect('/')
      })
*/
module.exports = app;
