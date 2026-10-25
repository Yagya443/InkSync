const express = require("express");
const authMiddleware = require("../config/authMiddleware");
const {
    createOrder,
    completeOrder,
    getMyOrders
} = require("../controllers/order.controller");

const router = express.Router();

router.post("/shop/:ownerId"    , createOrder);
router.patch("/:orderId/complete", authMiddleware, completeOrder);
router.get("/", authMiddleware, getMyOrders);

module.exports = router;
