
const express = require("express")
const mapping = require ("../test/mapping.js")
router = express.Router()


router.post("/get-data",mapping.test)

module.exports = router