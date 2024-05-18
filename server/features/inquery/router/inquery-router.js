const express = require("express");
router = express.Router();

const InqueryController = require("../controller/inquery-controller")

/**
 * @desc get Client inquery
 * @route api/client/:id
 * @method get
 * @access private
 */
router.get(
    "/client/:id",
    InqueryController.getClientInqueries
);

/**
 * @desc get hourse inquery
 * @route api/client/:id
 * @method get
 * @access private
 */
router.get(
    "/hourse/:id",
    InqueryController.getHourseInqueries
);

/**
 * @desc get instructor in
 * @route api/client/:id
 * @method get
 * @access private
 */
router.get(
    "/instructor/:id",
    InqueryController.getInstructorInqueries
);


module.exports = router;
