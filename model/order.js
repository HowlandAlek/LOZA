var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = Schema({
    OrderDate: Date,
    PaymentType: String,
    DeliveryDate: Date,
    Total: Number,
    address: {
        type: String,
        default: "",
    },
    products: [],
});

module.exports = mongoose.model("Order", OrderSchema);
