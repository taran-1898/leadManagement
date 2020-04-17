const express = require('express')
const router = express.Router()
const cityCtrl = require('../../controllers/city')

router.post('/createOrUpdateCity', cityCtrl.createOrUpdateCity)
router.get('/getCities', cityCtrl.getCities)

module.exports = router