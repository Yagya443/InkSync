const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const setOption = async (req, res) => {
    try {
        const { name, value } = req.body;

        if (value === undefined || Number(value) <= 0) {
            return res.status(400).json({ error: "A valid price is required" });
        }

        const ownerId = req.user.id;
        const option = await prisma.printingOption.upsert({
            where: { ownerId_name: { ownerId, name } },
            update: { value: Number(value) },
            create: { ownerId, name, value: Number(value) },
        });
        res.status(200).json({ option });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Something went wrong in Set Option Controller",
        });
    }
};

const getMyOptions = async (req, res) => {
    try {
        const options = await prisma.printingOption.findMany({
            where: { ownerId: req.user.id },
        });
        res.status(200).json({ options });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Something went wrong in getMyOptions Controller",
        });
    }
};

const setShopStatus = async (req, res) => {
    try {
        const current = await prisma.stationaryOwner.findUnique({
            where: { id: req.user.id },
            select: { isOpen: true },
        });

        const owner = await prisma.stationaryOwner.update({
            where: { id: req.user.id },
            data: { isOpen: !current.isOpen },
            select: { id: true, isOpen: true },
        });

        res.status(200).json({ owner });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong in Shop Status Controller",
        });
    }
};

module.exports = { setOption, getMyOptions, setShopStatus };
