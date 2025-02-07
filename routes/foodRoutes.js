const express = require("express");
const {
  addFood,
  listFood,
  removeFood,
} = require("../controllers/foodController");
const multer = require("multer");
const { addProfilePic } = require("../controllers/userController");
const authMiddleware = require("../config/authMiddleware");

const router = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads", // Ensure this folder exists
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/add", upload.single("image"), addFood); //Ex:localhost:4000/food/add
router.get("/list", listFood); //Ex:localhost:4000/food/list
router.post("/remove", removeFood); //Ex:localhost:4000/food/remove
router.post("/add-profile-pic", upload.single("image"),authMiddleware, addProfilePic);

module.exports = router;
