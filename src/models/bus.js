const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    driverName:{
        type:String,
    },
    busNumber:{
        type:String,
    },
    routeNumber:{type:String},
    date: {
        type: Date,
        default: Date.now
    },
    stand:[{type:String}]
})

const Bus = new mongoose.model("Bus",busSchema);

module.exports = Bus;


