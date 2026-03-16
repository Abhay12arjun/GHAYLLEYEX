require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const orderRoutes = require("./routes/orderRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Port from .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});