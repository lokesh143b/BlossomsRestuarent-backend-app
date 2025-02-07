const express = require("express");
const {
  createOrder ,getOrdersByDate,cancelOrder
} = require("../controllers/orderController");
const authMiddleware = require("../config/authMiddleware");

const router = express.Router();

router.post("/create",authMiddleware ,createOrder); // localhost:4000/order/create
router.post("/get-orders-by-date", getOrdersByDate);  //localhost:4000/order/get-orders-by-date
router.post("/cancel",authMiddleware , cancelOrder); // localhost:4000/order/cancel
 
module.exports = router;
