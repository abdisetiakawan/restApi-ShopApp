const express = require("express");
const router = express.Router();
const { ordersController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get(authorizeRole("penjual"), ordersController.getOrders);
router.post(authorizeRole("penjual"), ordersController.createOrder);
router.put("/:id", authorizeRole("penjual"), ordersController.updateOrder);
router.delete("/:id", authorizeRole("penjual"), ordersController.updateOrder);

module.exports = router;
