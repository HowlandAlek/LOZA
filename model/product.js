var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    _id: { type: String },
    collection_id: Number,
    name: String,
    collection_name: String,
    price: Number,
    rarity: String,
    stock: Number,
    img_id: String,
});

module.exports = mongoose.model("Product", ProductSchema);
