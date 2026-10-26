const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/auth.route.js");
const optionsRoutes = require("./src/routes/options.route.js");
const shopRoutes = require("./src/routes/shop.route.js");

const app = express();
app.use(express.json());


app.use(cors({}));


app.use("/user", userRoutes);
app.use("/options", optionsRoutes);
app.use("/shop", shopRoutes);


app.listen(3000, () => {
    console.log("Server is running at 3000");
});
