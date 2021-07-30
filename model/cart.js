var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CartSchema = Schema({
    Id: Number,
    Name: String,
    Price: Number,
    img_id: String,
});

module.exports = mongoose.model("Cart", CartSchema);
