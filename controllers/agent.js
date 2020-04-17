// require needed services
const agentServices = require('../services/agent')
const leadManagementServices = require('../services/leadManagement')

// Common controller for creation and/or updation of agents

const createOrUpdateAgent = async (request, response) => {
  try {
    const { agentName, bucketSize, cityid, agentid } = request.body
    // update agent data
    if (agentid) {
      if (!agentName && !cityid && !bucketSize) return
      else {
        const agent = await agentServices.createOrUpdateAgent({ agentName, bucketSize, cityid, agentid })
        return response.json({
          status: 0,
          data: agent,
        })  
      }
    }
    else if (!agentName || !cityid || !bucketSize) throw 'Data insufficient'
    // create new agent
    await agentServices.createOrUpdateAgent({ agentName, bucketSize, cityid })
    response.json({
      status: -1,
      message: err,
    })
  } catch (err) {
        response.json({
      status: -1,
      message: err,
    })
  }
}

// Function to get agents from dB

const getAgents = async (request, response) => {
  try {
    let { agentName, cityid, agentid } = request.query
    const agentNameLike = agentName ? `%${agentName}%` : ''
    cityid = cityid ? cityid : '' 
    agentid = agentid ? agentid : ''
    const agents = await agentServices.getAgents({ agentNameLike, cityid, agentid })
    response.json({
      status: 0,
      data: agents,
    })
  } catch (err) {
    console.log(err)
        response.json({
      status: -1,
      message: err,
    })
  }
}

// Function to delete agent from dB

const deleteAgent = async (request, response) => {
  try {
    const { agentid } = request.body
    if (!agentid) throw 'Please specify agent'
    // pick agent from unallocated pool to assign to leads of agent to be deleted
    const newAgent = await agentServices.getAgents({ cityid: 1 })
    const newAgentid = newAgent[0].agentid
    console.log(newAgent)
    // update leads of agent to be deleted
    await leadManagementServices.updateLeads({ where: { agentid } }, { updateValues: { agentid: newAgentid } })
    // delete specific agent
    const agent = await agentServices.deleteAgent({ agentid })
    response.json({
      status: 0,
      data: agent,
    })
  } catch (err) {
    console.log(err)
        response.json({
      status: -1,
      message: err,
    })
  }
}

module.exports = {
  createOrUpdateAgent,
  getAgents,
  deleteAgent
}