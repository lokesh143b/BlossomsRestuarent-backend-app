const express = require("express");
const { requestOTP, verifyOTP } = require("../controllers/userOtpController");
const  authMiddileware = require("../config/authMiddleware")

const router = express.Router();

router.post("/request-otp",authMiddileware ,requestOTP); //localhost:4000/auth/request-otp
router.post("/verify-otp",authMiddileware,verifyOTP);   //localhost:4000/auth/verify-otp

module.exports = router;
