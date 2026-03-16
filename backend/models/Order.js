const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  firstName: String,
  lastName: String,
  email: String,
  phone: String,

  address: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,

  product: String,
  quantity: Number,
  unitPrice: Number,
  totalAmount: Number,

  status: String,
  createdBy: String

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);