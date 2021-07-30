const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user");
const app = express();

app.post('/account/update',   async(req,res) =>{

    console.log(req.body);
    //req.body.name o algo
    var id = req.params.id;
    await Task.updateOne({_id: id}, req.body)
    res.redirect('/')
      })

module.exports = app;