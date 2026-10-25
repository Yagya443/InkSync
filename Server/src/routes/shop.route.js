const express = require("express");
const authMiddleware = require("../config/authMiddleware");
const { getAllShop, getShop } = require("../controllers/shop.controller");

const router = express.Router();

router.get("/", authMiddleware, getAllShop);
router.get("/:id", authMiddleware, getShop);

module.exports = router;