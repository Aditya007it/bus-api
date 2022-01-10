const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/busdata")
.then(()=>{console.log("connection estabilished")})
.catch((err)=>{console.log(err)});
