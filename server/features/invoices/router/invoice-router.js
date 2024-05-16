//import token
const express = require("express");
router = express.Router();

const InvoiceController = require("../controller/invoice-controller")


/**
 * @desc create New Invoice
 * @route api/Invoice
 * @method Post
 * @access private
 */
router.post(
  "/",
  InvoiceController.createNewInvoice
);



/**
 * @desc Get Invoice by id
 * @route api/Invoice
 * @method Get
 * @access private
 */
router.get(
  "/",
  InvoiceController.getAllInvoice
);


module.exports = router;
