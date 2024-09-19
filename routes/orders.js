const express = require("express");
const router = express.Router();
const { ordersController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get(ordersController.getOrders);
router.post(ordersController.createOrder);
router.put("/:id", ordersController.updateOrder);
router.delete("/:id", ordersController.updateOrder);

module.exports = router;
