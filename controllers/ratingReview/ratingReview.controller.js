const RatingReview = require("../../models/RatingReview");
const Order = require("../../models/Order");

exports.createRatingReview = async (req, res, next) => {
  const { orderId, productId, rating, reviewText } = req.body;
  const userId = req.user.id;

  if (!orderId || !productId || !rating) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const order = await Order.findOne({
      where: { id: orderId, userId, status: "selesai" },
    });

    if (!order) {
      return res
        .status(400)
        .json({ error: "Order not found or not completed" });
    }

    const newRatingReview = await RatingReview.create({
      userId,
      productId,
      orderId,
      rating,
      reviewText,
    });

    res
      .status(201)
      .json({ message: "Rating added successfully", newRatingReview });
  } catch (error) {
    next(error);
  }
};

exports.getRatingReviews = async (req, res, next) => {
  try {
    const ratingReviews = await RatingReview.findAll({
      include: [{ model: Order, attributes: ["id", "status"] }],
    });

    res.status(200).json(ratingReviews);
  } catch (error) {
    next(error);
  }
};
