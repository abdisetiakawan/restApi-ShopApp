const Order = require("../../models/Order");
const OrderDetails = require("../../models/OrderDetails");
const ShippingDetails = require("../../models/ShippingDetails");
const Product = require("../../models/Product");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: Product, through: { attributes: ["quantity", "price"] } },
      ],
    });
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
};

exports.createOrder = async (req, res) => {
  const { userId, products, shippingDetails } = req.body;
  try {
    const totalAmount = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    const order = await Order.create({
      userId,
      status: "sedang diproses",
      totalAmount,
    });

    for (const product of products) {
      await OrderDetails.create({
        orderId: order.id,
        productId: product.id,
        quantity: product.quantity,
        price: product.price,
      });
    }

    if (shippingDetails) {
      await ShippingDetails.create({ orderId: order.id, ...shippingDetails });
    }

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating order", error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  const { status, shippingDetails } = req.body;
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.update({ status });
    if (shippingDetails) {
      const existingShippingDetails = await ShippingDetails.findOne({
        where: { orderId: order.id },
      });
      if (existingShippingDetails) {
        await existingShippingDetails.update(shippingDetails);
      } else {
        await ShippingDetails.create({ orderId: order.id, ...shippingDetails });
      }
    }
    res.status(200).json({ message: "Order updated successfully", order });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating order", error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await ShippingDetails.destroy({ where: { orderId: order.id } });
    await OrderDetails.destroy({ where: { orderId: order.id } });
    await order.destroy();
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting order", error: error.message });
  }
};
