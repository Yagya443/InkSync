const express = require("express");
const authMiddleware = require("../config/authMiddleware");
const multer=require('multer')
const { uploadDocument } = require("../controllers/document.controller");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post("/upload", upload.array("files", 10), uploadDocument);

module.exports = router;
