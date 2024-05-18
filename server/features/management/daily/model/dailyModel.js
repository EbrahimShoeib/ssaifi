const mongoose = require("mongoose");
const joi = require("joi");
const dailySchema = new mongoose.Schema({
  courseDate: {
    type: String,
    required: true,
  },
  clientId: {
    type : mongoose.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  course: {
    type: String,
    require: false,
  },
  status: {
    type: String,
    required: true,
    
  },
  instractorId: {
    type : mongoose.Types.ObjectId,
    ref: "instractor",
    required: true,
  },
  paid: {
    type: String,
    require: true,
   
  },
  note: {
    type: String,
    require: true,
   
  },
  courseTime: {
    type: String,
    require: true,
   
  },
  hourseId : {
    type : mongoose.Types.ObjectId,
    ref: "Hourse",
    required: true,
       },
  price: {
    type:String ,
    require:true,
  
  },
  arena: {
    type:String,
    require:true,
   
  },
  membership: {
    type:String,
    require:true,
  },
});

const Daily =  mongoose.model("Daily", dailySchema);

function createNewDaily(obj) {
  const schema = joi.object({
    
    courseDate:joi.string().required().min(2).max(20),
    clientId:joi.string().required().min(2).max(50),
    course:joi.string().min(2).max(20),
    status:joi.string().required().valid("active", "inactive"),
    instractorId:joi.string().required().min(2).max(50),
    paid:joi.string().required().valid("pending","paid"),
    note:joi.string().required().min(2).max(20),
    courseTime:joi.string().required().min(2).max(20),
    hourseId:joi.string().required().min(2).max(50),
    price:joi.number().required().min(2).max(20),
    arena:joi.string().required().min(2).max(20),
    membership:joi.string().required().valid("individual","family"),

  });
  return schema.validate(obj);
}

function updateDaily(obj) {
  const schema = joi.object({
    courseDate:joi.string().required().min(2).max(20),
    clientId:joi.string().required().min(2).max(50),
    course:joi.string().min(2).max(20),
    status:joi.string().required().valid("active", "inactive"),
    instractorId:joi.string().required().min(2).max(50),
    paid:joi.string().required().valid("pending","paid"),
    note:joi.string().required().min(2).max(20),
    courseTime:joi.string().required().min(2).max(20),
    hourseId:joi.string().required().min(2).max(50),
    price:joi.number().required().min(2).max(20),
    arena:joi.string().required().min(2).max(20),
    membership:joi.string().required().valid("individual","family"),

  });
  return schema.validate(obj);
}

module.exports = {
  Daily,
  createNewDaily,
  updateDaily
};
