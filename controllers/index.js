const authController = require("./auth/auth.controller");
const ordersController = require("./orders/orders.controller");
const productsController = require("./products/products.controller");
const ratingReviewController = require("./ratingReview/ratingReview.controller");
const usersController = require("./users/users.controller");

module.exports = {
  authController,
  ordersController,
  productsController,
  ratingReviewController,
  usersController,
};
