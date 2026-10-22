const express = require("express");
const userRoutes = require("./src/routes/User.routes.js");
const optionsRoutes = require("./src/routes/options.routes.js");


const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/options", optionsRoutes);


app.listen(3000, () => {
    console.log("Server is running at 3000");
});
