const {
    Invoice,
    invoiceValidation
} = require("../model/invoice-model");
const path = require('path')

//import token
const ApiErrorCode = require("../../../core/errors/apiError") 


class InvoiceController {

    static async createNewInvoice (req, res) {
        try {
          const { error } = invoiceValidation(req.body);
          
          if (error) {
            res.status(400).json({
              status_code: ApiErrorCode.validation,
              message:" Validation error",
              data: null,
              error: {
                message: error.message,
              },
            });
          } else {
             new Invoice({

                clientName: req.body.clientName,
                invoiceType: req.body.invoiceType,
                totalAmount : req.body.totalAmount,
                invoiceDate : req.body.invoiceDate,
                status : req.body.status,
                clientType : req.body.clientType
              
            })
              .save()
              .then((docs) => {
                const { __v, ...other } = docs._doc;
      
                res.status(200).json({
                  status_code: 1,
                  message: "The Invoice is created successfuly",
                  data: {
                    ...other,
                  },
                });
              })
              .catch((error) => {
                res.status(500).json({
                  status_code: ApiErrorCode.internalError,
                  message: "There was an error when creating the Invoice, please try again",
                  data: null,
                  error: {
                    message: error.message,
                  },
                });
              });
          }
        } catch (error) {
          res.status(500).json({
            status_code: ApiErrorCode.internalError,
            message: "There was a server internal error, please try again",
            data: null,
            error: {
              message: error.message,
            },
          });
        }
    }

    static async getAllInvoice (req, res) {
        try {
            {

                // Pagination parameters
                const pageSize = 10; // Number of documents per page
          
                // Calculate the number of documents to skip
                const skip = (req.query.page - 1) * pageSize;
          
                const regexQuery = new RegExp(req.query.query, 'i'); // Case-insensitive regex query

                Invoice.find({
                  $or: [
                    { username: { $regex: regexQuery } },
                    { email: { $regex: regexQuery } },
                    { phone: { $regex: regexQuery } }
                  ]
                })
                  .select("-__v")
                  .skip(skip) // Skip documents
                  .limit(pageSize)
                  .then(async (docs) => {
                    const totalRecords = await Invoice.countDocuments();
          
                    const maxPages = Math.ceil(totalRecords / pageSize);
          
                    res.status(200).json({
                      status_code: 1,
                      message: "Got the Invoice successfuly",
                      data: {
                        current_page: parseInt(req.query.page) || 1,
                        max_pages: maxPages,
                        client: docs,
                      },
                    });
                  })
                  .catch((error) => {
                    res.status(500).json({
                      status_code: ApiErrorCode.internalError,
                      message:
                        "There was an error when getting the Invoice, please try again",
                      data: null,
                      error: {
                        message: error.message,
                      },
                    });
                  });
              }
        } catch (error) {
          res.status(500).json({
            status_code: ApiErrorCode.internalError,
            message: "There was a server internal error, please try again",
            data: null,
            error: {
              message: error.message,
            },
          });
        }
    }



}

module.exports = InvoiceController;