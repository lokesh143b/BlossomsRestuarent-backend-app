const express = require("express");
const {
  createTable,
  tables,
  deleteTable,
  tableOrders,
  updateTableOrderStatus,
  completedOrder
} = require("../controllers/tableController");

const router = express.Router();

router.post("/create", createTable); // localhost:4000/table/create
router.get("/tables" , tables) // localhost:4000/table/tables
router.post("/delete" , deleteTable) // localhost:4000/table/delete
router.post("/table-orders" , tableOrders) // localhost:4000/table/table-orders
router.post("/update-status" , updateTableOrderStatus) // localhost:4000/table/update-status
router.post("/completed-order" , completedOrder) //localhost:4000/table/completed-order
 
module.exports = router;
