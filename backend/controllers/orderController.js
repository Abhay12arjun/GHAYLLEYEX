const Order = require("../models/Order");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {

    const data = req.body;

    if (data.quantity < 1) {
      return res.status(400).json({ message: "Quantity cannot be below 1" });
    }

    data.totalAmount = data.quantity * data.unitPrice;

    const order = new Order(data);

    await order.save();

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ORDERS
exports.getOrders = async (req, res) => {

  try {

    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


// UPDATE ORDER
exports.updateOrder = async (req, res) => {

  try {

    const data = req.body;

    if (data.quantity < 1) {
      return res.status(400).json({ message: "Quantity cannot be below 1" });
    }

    data.totalAmount = data.quantity * data.unitPrice;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    res.json(order);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


// DELETE ORDER
exports.deleteOrder = async (req, res) => {

  try {

    await Order.findByIdAndDelete(req.params.id);

    res.json({ message: "Order deleted successfully" });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};