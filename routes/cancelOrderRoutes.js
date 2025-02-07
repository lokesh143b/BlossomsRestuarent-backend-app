const express = require('express') 
const {cancelOrder} = require("../controllers/cancelOrderController")

const router = express.Router()

router.get("/cancel" ,cancelOrder )  //localhost:4000/cancel-order/cancel

module.exports = router