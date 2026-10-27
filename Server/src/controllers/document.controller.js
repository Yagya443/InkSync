const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const uploadDocument = async (req, res) => {
    try {
        const { shopId } = req.body;
        const files = req.files;

        if (!shopId) {
            return res.status(400).json({
                success: false,
                message: "Shop ID is required.",
            });
        }

        if (!files || files.length === 0) { 
            return res.status(400).json({
                success: false,
                message:
                    "No files were uploaded. Please attach at least one document.",
            });
        }

        const uploadedFileDetails = files.map((file) => ({
            fileName: file.originalname,
            fileType: file.mimetype,
            fileSize: file.size,
        }));

        return res.status(201).json({
            data: {
                shopId,
                totalFiles: files.length,
                files: uploadedFileDetails,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong in Get Upload Controller",
        });
    }
};

module.exports = { uploadDocument };
