const express = require("express");
const router = express.Router();
const { ratingReviewController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get(ratingReviewController.getRatingReviews);
router.post(
  authorizeRole("pelanggan"),
  ratingReviewController.createRatingReview
);

module.exports = router;
