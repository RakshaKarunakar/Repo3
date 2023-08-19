const studentSchema = require('../model/studentSchema')
const Insert = async(req,res)=>{
    try{
        const {name, email, phone, address, age, date} = req.body;

        let checkphone = await studentSchema.findOne({phone});
        if(checkphone){
            console.log("Phone number already exits")
            return res.status(400).json({errors:"Phone number already exits"});
        }
        else {
            const data = await new studentSchema({ name: name, email: email, phone: phone, address: address, age: age, date: date });
            const savedStudent = await data.save();
            console.log("Insertion successful")
            res.send({ "Insertion successful": true, savedStudent });
        }
    }
    catch(error){
        console.error("some error Occured"+error);
        res.status(500).json("some internal error!!!")
    }
}


//view
const View = async(req, res)=>{
    try{
        const data = await studentSchema.find();
        console.log(data)
        res.json(data)
    }
    catch(error){
        console.error("some erroroccured"+error);
        res.status(500).json("Some internal error!!!")
    }
}



//Delete
const Delete = async(req, res)=>{
    try{
        let data = await studentSchema.findById(req.params.id);
        if(!data){
            console.log("Data is not found with this ID")
            return res.status(404).send("Data does not exist with this ID")
        }else{
            data = await studentSchema.findByIdAndDelete(req.params.id)
            console.log("Data deleted successfully")
            res.json({"success":"Deleted successfully", "Deleted Data":data})
        }
    }
    catch(error){
        console.error("some erroroccured"+error);
        res.status(500).json("Some internal error!!!")
    }
}



//singleView
const singleView = async(req, res)=>{
    try{
        let dataa = await studentSchema.findById(req.params.id);
        console.log(dataa)
        res.json(dataa)
    }
    catch(error){
            console.error("some erroroccured"+error);
            res.status(500).json("Some internal error!!!")
        }
}


//Update
const Update = async(req, res)=>{
    const {name, email, phone, address,age} = req.body;
    try {
        const newdata = {}
        if (name) { newdata.name = name }
        if (email) { newdata.email = email }
        if (phone) { newdata.phone = phone }
        if (address) { newdata.address = address }
        if (age) { newdata.age = age }
        let data = await studentSchema.findById(req.params.id);
        if (!data){
            console.log("Data is not found with this ID");
            return res.status(404).send("Data does not exist with this ID");
        }
        else {
            data = await studentSchema.findByIdAndUpdate(req.params.id, { $set: newdata });
            res.json((data));
        }
    }
    catch(error){
        console.error("some erroroccured"+error);
        res.status(500).json("Some internal error!!!")
    }
}


//register
const Register = async(req,res)=>{
    const {name, email, phone, password} = req.body;
    try{
        let checkemail = await studentSchema.findOne({phone});
        if(checkemail){
            console.log("Phone already exits")
            return res.status(400).json({errors:"Email already exits"});
        }
        else {
            const data = await new studentSchema({ name, email, phone, password });
            const savedStudent = await data.save();
            console.log("Insertion successful")
            res.send({ "Insertion successful": true, savedStudent });
        }
    }
    catch (error) {
        console.error("some error Occured" + error);
        res.status(500).json("some internal error!!!");
    }
}   

module.exports = {Insert, View, Delete,singleView, Update, Register};