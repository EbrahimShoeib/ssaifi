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
    minlength: [2, "course is less than 2 character "],
    maxlength: [20, "course item Name is longer than 20 character "],
    
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    required: true,
    minlength: [2, "status is less than 2 character "],
    maxlength: [20, "statusis longer than 20 character "],
    
  },
  instractorId: {
    type : mongoose.Types.ObjectId,
    ref: "instractor",
    required: true,
  },
  paid: {
    type: String,
    require: true,
    enum: ["Paid", "Pending"],
    minlength: [2, "paid is less than 2 character "],
    maxlength: [20, "paid is longer than 20 character "],
    
  },
  note: {
    type: String,
    require: true,
    minlength: [2, "noteis less than 2 character "],
    maxlength: [20, "note is longer than 20 character "],
   
  },
  courseTime: {
    type: String,
    require: true,
    minlength: [2, "courseTime is less than 2 character "],
    maxlength: [20, "courseTime is longer than 20 character "],
   
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
    enum :["Individual","Family"] ,
    require:true,
 
  },
});

const Daily =  mongoose.model("Daily", dailySchema);

function createNewDaily(obj) {
  const schema = joi.object({
    
    courseDate:joi.string().required().min(2).max(20),
    clientId:joi.string().required().min(2).max(50),
    course:joi.string().min(2).max(20),
    status:joi.string().required().min(2).max(20),
    instractorId:joi.string().required().min(2).max(50),
    paid:joi.string().required().min(2).max(20),
    note:joi.string().required().min(2).max(20),
    courseTime:joi.string().required().min(2).max(20),
    hourseId:joi.string().required().min(2).max(50),
    price:joi.number().required().min(2).max(20),
    arena:joi.string().required().min(2).max(20),
    membership:joi.string().required().min(2).max(20),

  });
  return schema.validate(obj);
}

function updateDaily(obj) {
  const schema = joi.object({
    courseDate:joi.string().required().min(2).max(20),
    clientId:joi.string().required().min(2).max(50),
    course:joi.string().min(2).max(20),
    status:joi.string().required().min(2).max(20),
    instractorId:joi.string().required().min(2).max(50),
    paid:joi.string().required().min(2).max(20),
    note:joi.string().required().min(2).max(20),
    courseTime:joi.string().required().min(2).max(20),
    hourseId:joi.string().required().min(2).max(50),
    price:joi.number().required().min(2).max(20),
    arena:joi.string().required().min(2).max(20),
    membership:joi.string().required().min(2).max(20),

  });
  return schema.validate(obj);
}

module.exports = {
  Daily,
  createNewDaily,
  updateDaily
};
