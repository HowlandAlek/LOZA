var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CartSchema = Schema({
    _id: { type: String },
    Id: Number,
    Name: String,
    Price: Number,
    Img_id: String,
});

module.exports = mongoose.model("Cart", CartSchema);
