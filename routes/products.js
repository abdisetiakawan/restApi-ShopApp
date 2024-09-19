const express = require("express");
const router = express.Router();
const { productsController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get(productsController.getProducts);
router.post(productsController.createProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
