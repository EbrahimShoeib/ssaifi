const mongoose = require("mongoose");
const joi = require("joi");
const SchadualSchema = new mongoose.Schema({
  courseDate: {
    type: String,
    required: true,
    default:""
  },
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  course: {
    type: String,
    require: true,
    minlength: [2, "course is less than 2 character "],
    maxlength: [20, "course item Name is longer than 20 character "],
    default:""
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    required: true,
    minlength: [2, "status is less than 2 character "],
    maxlength: [20, "statusis longer than 20 character "],
    default:""
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
    minlength: [2, "paid is less than 2 character "],
    maxlength: [20, "paid is longer than 20 character "],
    default:""
  },
  note: {
    type: String,
    require: true,
    minlength: [2, "noteis less than 2 character "],
    maxlength: [20, "note is longer than 20 character "],
    default: "",
  },
  courseTime: {
    type: String,
    require: true,
    minlength: [2, "courseTime is less than 2 character "],
    maxlength: [20, "courseTime is longer than 20 character "],
    default: "",
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
    default:""
  },
  membership: {
    type:String,
    enum :["individual","family"] ,
    require:true,
    default:""
  },
  Confitmation: {
    type:String,
    require:true,
    default:""
  },
});

const Schadual = mongoose.model("Schadual", SchadualSchema);

function createNewSchadual(obj) {
  const schema = joi.object({
    courseDate:joi.string().required().min(2).max(20),
    clientId:joi.string().required().min(2).max(50),
    course:joi.string().required().min(2).max(20),
    status:joi.string().required().min(2).max(20),
    instractorId:joi.string().required().min(2).max(50),
    paid:joi.string().required().min(2).max(20),
    note:joi.string().required().min(2).max(20),
    courseTime:joi.string().required().min(2).max(20),
    hourseId:joi.string().required().min(2).max(50),
    price:joi.number().required().min(2).max(20),
    arena:joi.string().required().min(2).max(20),
    membership:joi.string().required().min(2).max(20),
    Confitmation:joi.string().required().min(2).max(20),


  });
  return schema.validate(obj);
}

function updateSchadual(obj) {
  const schema = joi.object({
    courseDate:joi.string().required().min(2).max(20),
    clientId:joi.string().required().min(2).max(50),
    course:joi.string().required().min(2).max(20),
    status:joi.string().required().min(2).max(20),
    instractorId:joi.string().required().min(2).max(50),
    paid:joi.string().required().min(2).max(20),
    note:joi.string().required().min(2).max(20),
    courseTime:joi.string().required().min(2).max(20),
    hourseId:joi.string().required().min(2).max(50),
    price:joi.number().required().min(2).max(20),
    arena:joi.string().required().min(2).max(20),
    membership:joi.string().required().min(2).max(20),
    Confitmation:joi.string().required().min(2).max(20),
  });
  return schema.validate(obj);
}

module.exports = {
    Schadual,
  createNewSchadual,
  updateSchadual
};
