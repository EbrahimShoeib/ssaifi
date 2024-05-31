const mongoose=require("mongoose")
const joi = require("joi")

const InvoiceSchema = mongoose.Schema({
    clientId: {
        type: mongoose.Types.ObjectId,
        ref: "Client",
        required: true,
    },
    
    invoiceType: {
        type: String,
        required: true,
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
        type : String,
        required: true,
        enum: ['active','inactive'],
    },
    clientType : {
        type : String,
        required: true,
        enum: ['premium','basic'],
    },
    debit:{
        type:Number
    }
})

const Invoice = mongoose.model("Invoice",InvoiceSchema)



function invoiceValidation(obj){
    const schema = joi.object({
        clientId: joi.string().min(3).max(30),
        invoiceType: joi.string().required(),
        totalAmount : joi.number().min(1),
        invoiceDate : joi.string().min(4).max(25),
        status : joi.string().valid('active','inactive').required(),
        clientType : joi.string().valid('premium','basic').required(),
        debit:joi.number()
    })
    return schema.validate(obj);
}



module.exports = {
    Invoice,
    invoiceValidation
}