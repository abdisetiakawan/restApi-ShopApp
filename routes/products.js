const express = require("express");
const router = express.Router();
const { productsController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get(productsController.getProducts);
router.post(authorizeRole("penjual"), productsController.createProduct);
router.put("/:id", authorizeRole("penjual"), productsController.updateProduct);
router.delete(
  "/:id",
  authorizeRole("penjual"),
  productsController.deleteProduct
);

module.exports = router;
