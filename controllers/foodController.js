const foodModel = require("../models/foodModel");
const fs = require("fs");

const addFood = async (req, res) => {
  const image_filename = req.file?.filename; // Ensure file exists

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });

  try {
    await food.save();
    res.status(201).json({ success: true, message: "Food Added" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving food" });
    console.error("Error adding food:", error);
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});

    if (!foods.length) {
      return res.status(200).json({
        success: true,
        message: "No food items found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Food list fetched",
      data: foods,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching list of food",
      error: error.message, // Send the error message in the response
    });
  }
};

// remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "Item removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error removing food" });
  }
};

module.exports = { addFood, listFood, removeFood };
