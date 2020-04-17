const express = require('express')
const router = express.Router()
const leadManagementCtrl = require('../../controllers/leadManagementSystem')

router.post('/createOrUpdateLead', leadManagementCtrl.createOrUpdateLead)
router.post('/removeLead', leadManagementCtrl.removeLead)
router.get('/getLeads', leadManagementCtrl.getLeads)

module.exports = router