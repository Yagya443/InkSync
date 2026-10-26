require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const authToken = req.headers.authorization;

        if (!authToken) {
            return res.status(401).json({
                message: "No token provided",
            });
        }
        const token = authToken.split(" ")[1];

        console.log("SECRET FROM ENV:", process.env.JWT_SECRET);
        console.log("TOKEN RECEIVED:", token);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        console.log("VERIFY FAILED:", error.message);
        return res.status(401).json({
            message: error.message,
        });
    }
};

module.exports = authMiddleware;
