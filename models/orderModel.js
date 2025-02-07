const mongoose = require("mongoose");

// Define the Order schema
const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
    table: { type: mongoose.Schema.Types.ObjectId, ref: "Table", required: true }, // Reference to Table
    items: [
      {
        food: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true }, // Reference to Food
        quantity: { type: Number, required: true }, // Quantity of the item
        status: {
          type: String,
          enum: ["Pending", "Preparing", "Served", "Cancelled"],
          default: "Pending",
        },
      },
    ],
    total : {type: Number},
    GST : {type: Number},
    totalAmount: { type: Number }, // Total amount for the order
    createdAt: { type: Date, default: Date.now }, // Order creation timestamp
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt
);

// Export the Order model
module.exports = mongoose.model("Order", orderSchema) || mongoose.models.Order;
