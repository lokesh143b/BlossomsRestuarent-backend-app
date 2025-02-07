const express = require("express");
const {
  registerUser,
  loginUser,
  addToCart,
  removeFromCart,
  removeItemFromCart,
  getCartData,
  addProfileData,
  getUserProfile
} = require("../controllers/userController");
const authMiddleWare = require("../config/authMiddleware");


const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addToCart", authMiddleWare, addToCart);
router.post("/removeFromCart", authMiddleWare, removeFromCart);
router.post("/removeItemFromCart", authMiddleWare, removeItemFromCart);
router.get("/getCartData", authMiddleWare, getCartData);
router.post("/add-profile-data",authMiddleWare, addProfileData);
router.get("/profile" , authMiddleWare,getUserProfile)

module.exports = router;
