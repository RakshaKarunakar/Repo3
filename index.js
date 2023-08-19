const express = require('express');
const {Hello,change} =require('./demo');
const connectTomongo = require('./db');
const MySchema = require('./model/crud');
MySchema();
connectTomongo();
const app = express();
app.use(express.json());
const port=7000;
app.use('/api/student',require('./router/studentRouter'))

//<input type="text" name="name/>

app.post('/api/insert',async(req,res)=>{
    try{
        const {name, email, phone, address,age}=req.body;
        const data = new MySchema({name,email,phone,address,age});           
        const saveData = await data.save();
        res.send({"Insertion Success":true,saveData});
    }
    catch(error){
        console.error("Some error Occured"+error);
        res.status(500).json("Some Internal error!!!");
    }
})

app.get('/first',(req,res)=>{
    console.log("--------------------------------------")
    console.log("Your first API has been called");
    res.send("This is my first API call")
})

app.get('/datetime',(req,res)=>{
    const time = new Date().toLocaleTimeString();
    const date= new Date().toLocaleDateString();
    res.send('Time :' +time+ ',Date:' +date)
})

Hello()
change("sujani")
app.listen(port,()=>{
    console.log("--------------------------------------")
    console.log("App is listening on port number"+port);
    console.log(`App is listening on port number ${port}`)
})