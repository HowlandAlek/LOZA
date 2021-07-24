var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    name: String,
    collection: String,
    price: Number,
    rarity: String,
    stock: Number,
    img_url: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model("Product", ProductSchema);
