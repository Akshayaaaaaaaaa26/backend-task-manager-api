const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
    res.send("Backend API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});