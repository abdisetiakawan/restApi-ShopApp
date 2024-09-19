const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get(usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
