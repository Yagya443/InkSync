const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createOrder = async (req, res) => {
    try {
        const ownerId = Number(req.params.ownerId);
        const { documents } = req.body;
        if (documents.length === 0) {
            return res
                .status(400)
                .json({ error: "At least one document is required" });
        }
        const owner = await prisma.stationaryOwner.findUnique({
            where: { id: ownerId },
            include: { options: true },
        });

        if (!owner.isOpen)
            return res.status(400).json({ error: "Shop is closed" });

        const prices = {};
        owner.options.forEach((o) => (prices[o.name] = Number(o.value)));

        let totalPages = 0;
        let totalAmount = 0;
        const docData = [];

        for (const d of documents) {
            const type = d.type || "BW";
            const copies = Number(d.copies) || 1;
            const pages = Number(d.pages);
            const fileSize = Number(d.fileSize);

            if (!d.fileName || !d.fileKey || !fileSize || !pages || pages < 1) {
                return res.status(400).json({ error: "Invalid document data" });
            }
            if (!Number.isInteger(copies) || copies < 1) {
                return res
                    .status(400)
                    .json({ error: "Invalid number of copies" });
            }
            if (prices[type] === undefined) {
                return res
                    .status(400)
                    .json({ error: `Shop has no price set for ${type}` });
            }

            totalPages += pages * copies;
            totalAmount += pages * copies * prices[type];

            docData.push({
                fileName: d.fileName,
                fileKey: d.fileKey,
                fileSize,
                pages,
                copies,
                type,
            });
            const otp = generateOtp();
            let order;
            for (let attempt = 0; attempt < 3; attempt++) {
                try {
                    order = await prisma.order.create({
                        data: {
                            orderCode: generateOrderCode(),
                            otp,
                            ownerId,
                            totalPages,
                            totalAmount: totalAmount.toFixed(2),
                            documents: { create: docData },
                        },
                        include: { documents: true },
                    });
                    break;
                } catch (err) {
                    if (err.code !== "P2002" || attempt === 2) throw err;
                }
            }
            res.status(201).json({ order });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong in Create Order Controller",
        });
    }
};
