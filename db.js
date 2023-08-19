const mongoose = require('mongoose');
const mongoURL = "mongodb://127.0.0.1:27017/crud";
//const mongoURL = "mongodb://localhost:27017/crud";

const connectTomongo = async() =>{
    try{
        await mongoose.connect(mongoURL)
        console.log("connect to mongo Successfull");
    }
    catch(err){
        console.log("connect to mongo UNsuccessfull",err);
    }
}   
module.exports = connectTomongo;