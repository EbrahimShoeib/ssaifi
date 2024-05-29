const mongoose = require("mongoose");
const joi = require("joi");


const packageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  lessons: {
    type: Number,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum:["expired","active"],
    required: true,
  }
});

const Package = mongoose.model("Package", packageSchema);

function createNewPackage(obj) {
  const schema = joi.object({
    category:joi.string().required().min(1).max(20),
    lessons:joi.number().required().min(1).max(20),
    startDate:joi.string().required().min(1).max(20),
    endDate:joi.string().required().min(1).max(20),
    status:joi.string().required().valid("expired","active").min(1).max(20),
    name:joi.string().required(),
  })
  return schema.validate(obj);
}

function updatePackage(obj) {
  const schema = joi.object({
    category:joi.string().required().min(1).max(20),
    lessons:joi.number().required().min(1).max(20),
    startDate:joi.string().required().min(1).max(20),
    endDate:joi.string().required().min(1).max(20),
    status:joi.string().required().valid("expired","active").min(1).max(20),
    name:joi.string().required(),
  });
  return schema.validate(obj);
}

module.exports = {
    Package,
  createNewPackage,
  updatePackage,
};
