const mongoose = require('mongoose');
const {Schema} = mongoose;
const MySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:false
    }
})
module.exports=mongoose.model("table",MySchema);