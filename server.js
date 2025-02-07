const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const foodRoutes = require("./routes/foodRoutes");
const userRoutes = require("./routes/userRoutes")
const tableRoutes = require("./routes/tableRoutes")
const orderRoutes = require("./routes/orderRoutes")
const cancelOrderRoutes = require("./routes/cancelOrderRoutes")
const userOtpRoutes = require("./routes/userOtpRoutes")

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/images", express.static("uploads")); // Ex: localhost:4000/images/1734234540839-emoji.png


// Routes
app.use("/food", foodRoutes);
app.use("/user" , userRoutes)
app.use("/table",tableRoutes) 
app.use("/order" , orderRoutes)
app.use("/cancel-order" , cancelOrderRoutes)
app.use("/auth" , userOtpRoutes)

// Health Check
app.get("/", (req, res) => {
  res.send("API is working");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
