const agentRepository = require('../repositories/agent')
const OP = process.SEQ_OP

const createOrUpdateAgent = async ({ agentName, bucketSize, cityid, agentid }) => {
  if (agentid) {
    const where = { agentid }
    const updateValues = {}
    agentName && (updateValues.agentName = agentName)
    bucketSize && (updateValues.bucketSize = bucketSize) 
    cityid && (updateValues.cityid = cityid)
    return await agentRepository.updateAgentDetails({ updateValues, where })
  }
  return await agentRepository.createAgent({ agentName, bucketSize, cityid })
}

const getAgents = async ({ agentNameLike, cityid, agentid }) => {
  const where = {}
  agentNameLike && (where.agentName = {[OP.like] : `%${agentNameLike}%`})
  cityid && (where.cityid = cityid)
  agentid && (where.agentid = agentid)
  return await agentRepository.getAgents({ where })
}

const deleteAgent = async ({ agentid }) => {
  const where = { agentid }
  return await agentRepository.deleteAgent({ where })
}

module.exports = {
  createOrUpdateAgent,
  getAgents,
  deleteAgent
}