const express = require("express");
const router = express.Router();
const { ordersController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get(ordersController.getOrders);
router.post(ordersController.createOrder);
router.put("/:id", ordersController.updateOrder);
router.delete("/:id", ordersController.updateOrder);

router.get("/", menuController.getMenuItems);
router.post("/", authorizeRole("owner"), menuController.createMenuItem);
router.put("/:id", authorizeRole("owner"), menuController.updateMenuItem);
router.delete("/:id", authorizeRole("owner"), menuController.deleteMenuItem);

module.exports = router;
