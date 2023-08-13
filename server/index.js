const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on " + process.env.PORT);
})
