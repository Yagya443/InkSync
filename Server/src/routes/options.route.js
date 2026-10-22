const express = require("express");
const {
    setOption,
    getMyOptions,
    setShopStatus,
} = require("../controllers/options.controller");
const authMiddleware = require("../config/authMiddleware");

const router = express.Router();

router.put("/", authMiddleware, setOption);
router.get("/", authMiddleware, getMyOptions);
router.patch("/shop-status", authMiddleware, setShopStatus);

module.exports = { router };
