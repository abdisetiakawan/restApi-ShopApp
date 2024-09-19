const express = require("express");
const router = express.Router();
const { ratingReviewController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.get(ratingReviewController.getRatingReviews);
router.get(ratingReviewController.createRatingReview);

module.exports = router;
