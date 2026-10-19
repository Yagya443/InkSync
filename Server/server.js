const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

app.listen(3000, () => {
    console.log("Server is running at 3000");
});
