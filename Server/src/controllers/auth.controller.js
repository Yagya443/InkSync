const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ error: "Email and password required" });
        }
        const owner = await prisma.stationaryOwner.findUnique({
            where: { email },
        });

        if (!owner) {
            return res.status(401).json({ error: "Email doesnt exist" });
        }
        const matches = await bcrypt.compare(password, owner.password);
        if (!matches) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = jwt.sign(
            {
                id: owner.id,
                email: owner.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );

        res.status(201).json({
            owner,
            token,
            message: "Login is been done successfully ",
        });
    } catch (error) {
        console.log("error");
        
        res.status(500).json({
            message: error.message,

            error: "Something went wrong in Login Controller",
        });
    }
};
const signup = async (req, res) => {
    try {
        const { ownerName, shopName, email, password } = req.body;

        if (!ownerName || !shopName || !email || !password) {
            return res
                .status(400)
                .json({ error: "Email and password required" });
        }

        const existing = await prisma.stationaryOwner.findUnique({
            where: { email },
        });

        if (existing) {
            return res.status(409).json({ error: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const profile = await prisma.stationaryOwner.create({
            data: {
                ownerName,
                shopName,
                email,
                password: hashedPassword,
            },
        });

        const token = jwt.sign(
            { id: profile.id, email: profile.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );

        res.status(201).json({
            profile,
            token,
            message: "Accout Create Successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: "Something went wrong in signin Controller",
        });
    }
};
const getUser = async (req, res) => {
    try {
        const profile = await prisma.stationaryOwner.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                ownerName: true,
                shopName: true,
                email: true,
                phone: true,
            },
        });

        if (!profile) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ owner });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: "Something went wrong in getUser Controller",
        });
    }
};

module.exports = { login, signup, getUser };
