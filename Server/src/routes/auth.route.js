const express = require("express");
const { signup, login, getUser } = require("../controllers/auth.controller");
const authMiddleware = require("../config/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);
router.get("/me",authMiddleware, getUser);

module.exports=router