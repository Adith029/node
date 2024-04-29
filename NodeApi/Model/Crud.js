const mongoose = require("mongoose")

const crudModel = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

const crudDB = mongoose.model("cruds",crudModel)
module.exports = crudDB