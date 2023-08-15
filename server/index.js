const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to DB");
    console.log("-----------------------------------------------");
}).catch((err) => {
    console.log(err.message);
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on " + process.env.PORT);
})
