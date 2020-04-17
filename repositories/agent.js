const db = require('../models')

const updateAgentDetails = async ({ updateValues, where }) => {
  return await db.agents.update(updateValues, { where })
}

const createAgent = async (values) => {
  return await db.agents.upsert(values)
}

const getAgents = async ({ where }) => {
  return await db.agents.findAll({
    where,
    raw: true
  })
}

const deleteAgent = async ({ where }) => {
  return await db.agents.destroy({ where })
}

module.exports = {
  createAgent,
  updateAgentDetails,
  getAgents,
  deleteAgent
}