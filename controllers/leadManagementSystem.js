// require needed services
const leadmanagementServices = require('../services/leadManagement')
const agentServices = require('../services/agent')
const cityServices = require('../services/city')
// used for accurate createdAt objects
const moment = require('moment')

// Common controller for creation and/or updation of leads

const createOrUpdateLead = async (request, response) => {
  try {
    const { name, cityid, leadid } = request.body
    let { agentid, createdAt } = request.body
    // cityid 1 alloted to unallocated pool
    if (cityid != 1) {
      //check for bucket size if specific agent assigned
      if (agentid) {
        let lead
        if (leadid)
          lead = await leadmanagementServices.getLeads({ leadid, createdAt: moment().format('YYYY-MM-DD') })
        if (!leadid || (lead && lead[0].agentid != agentid)) {
          const agent = await agentServices.getAgents({ agentid })
          if (!agent || !agent.length) throw 'Agent not found'
          const leadsUnderAgent = await leadmanagementServices.getLeads({ agentid, createdAt: moment().format('YYYY-MM-DD') })
          if (agent.bucketSize == leadsUnderAgent.length) throw 'Bucket size reached'
        }
      }
      // pick a random agent for that city or unallocated pool
      else {
        let agents = await agentServices.getAgents({ cityid })
        for (const index of agents) {
          const agent = agents[index]
          const leadsUnderAgent = await leadmanagementServices.getLeads({ agentid: agent.agentid, createdAt: moment().format('YYYY-MM-DD') })
          if (agent.bucketSize == leadsUnderAgent.length) agents.splice(index, 1)
        }
        if (!agents.length)
          agents = await agentServices.getAgents({ cityid: 1 })
        const index = Math.floor(Math.random() * (agents.length - 1))
        agentid = agents[index].agentid
      }
    }
    // for updating a lead
    if (leadid) {
      if (!name && !createdAt && !agentid && !cityid) return
      return await leadmanagementServices.createOrUpdateLead({ name, createdAt, agentid, cityid, leadid })
    }
    else if (!name || !agentid || !cityid) throw 'Data insufficient'
    if (cityid) {
      const city = await cityServices.getCities({ cityid })
      if (!city || !city.length) throw 'City not found'
    }
    // create new lead
    createdAt =  moment().format('YYYY-MM-DD')
    const lead = await leadmanagementServices.createOrUpdateLead({ name, agentid, cityid, createdAt })
    response.json({
      status: 0,
      data: lead,
    })
  } catch (err) {
    response.json({
      status: -1,
      message: err,
    })
  }
}

// Function to get leads from dB

const getLeads = async (request, response) => {
  try {
    const { name, agentid, cityid, leadid, createdAt } = request.query
    const nameLike = name ? `%${name}%` : ''
    const leads = await leadmanagementServices.getLeads({ nameLike, agentid, cityid, leadid, createdAt })
    response.json({
      status: 0,
      data : leads,
    })
  } catch (err) {
    response.json({
      status: -1,
      message: err,
    })
  }
}

// Remove a lead from the dB

const removeLead = async (request, response) => {
  try {
    const { leadid } = request.body
    if (!leadid) throw 'Please specify lead'
    await leadmanagementServices.deleteLead({ leadid })
    response.json({
      status: 0,
      message: 'success',
    })
  } catch (err) {
    response.json({
      status: -1,
      message: err,
    })
  }
}

module.exports = {
  createOrUpdateLead,
  getLeads,
  removeLead
}