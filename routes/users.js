const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get("/", authorizeRole("penjual"), usersController.getUsers);
router.get("/:id", authorizeRole("penjual"), usersController.getUserById);
router.put("/:id", authorizeRole("penjual"), usersController.updateUser);
router.delete("/:id", authorizeRole("penjual"), usersController.deleteUser);

module.exports = router;
