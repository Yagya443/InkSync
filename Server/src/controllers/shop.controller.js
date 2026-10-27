const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllShop = async (req, res) => {
    try {
        const shops = await prisma.stationaryOwner.findMany({
            select: {
                id: true,
                ownerName: true,
                shopName: true,
                email: true,
                location: true,
                options: true,
            },
        });

        res.status(200).json({ shops });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something went wrong in getAllShop controller",
        });
    }
};

const getShop = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const shop = await prisma.stationaryOwner.findUnique({
            where: { id },
            select: {
                id: true,
                shopName: true,
                isOpen: true,
                options: { select: { name: true, value: true } },
            },
        });

        res.status(200).json({ shop });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Something went wrong in getShop controller",
        });
    }
};

module.exports = { getAllShop, getShop };
