const express = require("express");
const app = express();
require("./db/conn");
const Bus = require("./models/bus");
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/busapi",async(req,res)=>{
    try {
        const user = new Bus(req.body);
        console.log(user);
        const result = await user.save();
        res.status(200).send(result);
        
    } catch (error) {
        res.status(404).send(error);
        console.log(error);
        
    }

})


app.get("/busapi",async(req,res)=>{
    try {
        const ress = await Bus.find();
        res.send(ress);
        
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is on at ${port}`);
})