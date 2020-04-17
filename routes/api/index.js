const express = require('express')
const router = express.Router()

/*
* Parent routes for each controller
*/
router.use('/agent', require('./agent'))
router.use('/city', require('./city'))
router.use('/leadManagement', require('./leadManagement'))

module.exports = router