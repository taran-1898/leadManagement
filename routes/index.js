const express = require('express')
const router = express.Router()

/**
 * API Routes
 */
router.use('/api', require('./api'))

module.exports = router
