var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    collection_id: Number,
    name: String,
    collection_name: String,
    price: Number,
    rarity: String,
    stock: Number,
    img_id: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model("Product", ProductSchema);
