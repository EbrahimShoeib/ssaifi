const joi = require("joi")
const mongoose = require("mongoose")

const instractorSchema = mongoose.Schema({

    instractorName:{
        type:String,
        required:true,
        minlength: [2,"instractor Name is less than 2 character "],
        maxlength: [20,"instractor Name is longer than 20 character "]    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    avatar :{
        type: String || null,
        required:false,
        default : null
    }
})

const instractor = mongoose.model("instractor",instractorSchema)

function createInstractorValidation(obj){
    const schema = joi.object({
        instractorName : joi.string().required().min(2).max(20),
        email : joi.string().required().min(0).max(100),
        phoneNumber : joi.string().required().min(1).max(100),
        age: joi.number().required().min(1).max(20),
        gender : joi.string().valid('male', 'female').required(),
        avatar: joi.string(),
    })
    return schema.validate(obj);
}
function updateInstractorValidation(obj){
    const schema = joi.object({
        instractorName : joi.string().min(2).max(20),
        email : joi.string().min(0).max(100),
        phoneNumber : joi.string().min(1).max(100),
        age: joi.number().min(1).max(20),
        gender : joi.string().valid('male', 'female'),
        avatar: joi.string(),
    })
    return schema.validate(obj);
}

module.exports ={
    instractor,
    createInstractorValidation,
    updateInstractorValidation
}