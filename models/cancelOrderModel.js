const mongoose = require('mongoose') 

const cancelOrderSchema = new mongoose.Schema({
    cancelOrderDetails : {type : Object , default : {}},
    userDetails : {type : Object , default : {}},
    tableDetails : {type : Object , default : {}},
})

module.exports = mongoose.model("cancelOrder" , cancelOrderSchema) || mongoose.model.cancelOrder