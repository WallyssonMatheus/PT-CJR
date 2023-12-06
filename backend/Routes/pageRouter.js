const express = require("express")
const path = require('path')
const router = express.Router()

router.use('/', express.static('frontend'))
router.use('/', express.static('frontend/pages'))
router.use('/', express.static('frontend/pages/html'))

module.exports = router;