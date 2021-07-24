var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    last_name: String,
    email: String,
    phone: String,
    password: String,
    orders: [],
    cart: [],
});

module.exports = mongoose.model("User", UserSchema);
