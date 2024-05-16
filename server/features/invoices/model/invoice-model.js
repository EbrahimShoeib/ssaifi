const mongoose=require("mongoose")
const joi = require("joi")

const InvoiceSchema = mongoose.Schema({
    clientName: {
        type : String,
        required:true,
    },
    
    invoiceType: {
        type: String,
        required: true,
        enum: ['individual'], // Define your enum values here
    },

    totalAmount : {
        type: Number,
        required: true,
    },

    invoiceDate : {
        type: String,
        required: true,
    },
    status : {
        type : [String],
        required: true,
        enum: ['active','inactive'], // Define your enum values here
    },
    clientType : {
        type : [String],
        required: true,
        enum: ['premuim','normal'], // Defin
    }
})

const Invoice = mongoose.model("Invoice",InvoiceSchema)



function invoiceValidation(obj){
    const schema = joi.object({
        clientName: joi.string().min(3).max(30),
        invoiceType: joi.string().valid('individual').required(),
        totalAmount : joi.number().min(1),
        invoiceDate : joi.string().min(4).max(25),
        status : joi.string().valid('active','inactive').required(),
        clientType : joi.string().valid('premuim','normal').required()
    })
    return schema.validate(obj);
}



module.exports = {
    Invoice,
    invoiceValidation
}