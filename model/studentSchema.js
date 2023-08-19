const mongoose = require('mongoose');
const { Schema } = mongoose;
const studentSchema = new Schema({
    name:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    phone:{
        type : Number,
        require : true
    },
    address:{
       type : String,
       require : false
    },
    age:{
       type : Number,
       require : false
    }, 

    date:{
        type: Date,
        default:Date.now()
    },
    password:{
        type:String,
        require : true
    }
})
module.exports = mongoose.model("student",studentSchema)