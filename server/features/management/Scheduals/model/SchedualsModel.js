const mongoose = require("mongoose");
const joi = require("joi");
const SchadualSchema = new mongoose.Schema({
  courseDate: {
    type: String,
    required: true,
    
  },
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  course: {
    type : mongoose.Types.ObjectId,
    require: true,
    ref: "Package"
  },
  status: {
    type: String,
    enum: ["cancel", "arrived","late cancel","no cancel"],
    required: true,
  },
  instractorId: {
    type: mongoose.Types.ObjectId,
    ref: "instractor",
    required: true,
  },
  paid: {
    type: String,
    require: true,
    enum: ["paid", "pending"],
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
    default:""
  },
  arena: {
    type:String,
    require:true,
  },
  membership: {
    type:String,
    enum :["-","member"] ,
    require:true,
  },
  confitmation: {
    type:String,
    require:true,
  },
});

const Schadual = mongoose.model("Schadual", SchadualSchema);

function createNewSchadual(obj) {
  const schema = joi.object({
    courseDate:joi.string().required().min(2).max(20),
    clientId:joi.string().required().min(2).max(50),
    course:joi.string().required(),
    status:joi.string().required().valid("cancel", "arrived","late cancel","no cancel"),
    instractorId:joi.string().required().min(2).max(50),
    paid:joi.string().valid("paid", "pending").required(),
    note:joi.string().required().min(2).max(20),
    courseTime:joi.string().required().min(2).max(20),
    hourseId:joi.string().required().min(2).max(50),
    price:joi.number().required().min(1),
    arena:joi.string().required().min(2).max(20),
    membership:joi.string().valid("-","membership").required(),
    confitmation:joi.string().required().min(2).max(20),
  });
  return schema.validate(obj);
}

function updateSchadual(obj) {
  const schema = joi.object({
    courseDate:joi.string().required().min(2).max(20),
    clientId:joi.string().required().min(2).max(50),
    course:joi.string().required(),
    status:joi.string().required().valid("cancel", "arrived","late cancel","no cancel"),
    instractorId:joi.string().required().min(2).max(50),
    paid:joi.string().valid("paid", "pending").required(),
    note:joi.string().required().min(2).max(20),
    courseTime:joi.string().required().min(2).max(20),
    hourseId:joi.string().required().min(2).max(50),
    price:joi.number().required().min(1),
    arena:joi.string().required().min(2).max(20),
    membership:joi.string().valid("-","membership").required(),
    confitmation:joi.string().required().min(2).max(20),
  });
  return schema.validate(obj);
}

module.exports = {
  Schadual,
  createNewSchadual,
  updateSchadual
};
