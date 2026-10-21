const { Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ error: "Email and password required" });
        }
        const owner = await prisma.StationaryOwner.findUnique({
            where: { email },
        });

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
            token,
            message: "Login is been done successfully ",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: "Something went wrong in Login Controller",
        });
    }
};
const signup = async (req, res) => {
    try {
        const { ownerName, shopName, email, password } = res.body;

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
            ownerName,
            shopName,
            email,
            hashedPassword: password,
        });

        const token = jwt.sign(
            { id: pro.id, email: owner.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );

        res.status(201).json({
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: "Something went wrong in signin Controller",
        });
    }
};

module.exports = { login, signup };
