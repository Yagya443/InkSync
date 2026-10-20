const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

async function main() {
    await prisma.stationaryOwner.create({
        data: {
            ownerName: "Yagya vyas",
            shopName: "Yagya",
            email: "yagnaakv99@gmail.com",
            phone: "0123456789",
            password: "12345678",
            city: "Mumbai",
        },
    });
}

main()
    .catch((err) => console.error("Create failed:", err.message))
    .finally(() => prisma.$disconnect());

app.listen(3000, () => {
    console.log("Server is running at 3000");
});
