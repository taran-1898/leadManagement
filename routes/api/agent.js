const express = require('express')
const router = express.Router()
const agentCtrl = require('../../controllers/agent')

router.post('/createOrUpdateAgent', agentCtrl.createOrUpdateAgent)
router.post('/deleteAgent', agentCtrl.deleteAgent)
router.get('/getAgents', agentCtrl.getAgents)

module.exports = router