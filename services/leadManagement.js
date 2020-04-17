const leadManagementRepository = require('../repositories/leadManagement')

const getLeads = async ({ nameLike, agentid, cityid, leadid, createdAt }) => {
  const where = {}
  nameLike && (where.nameLike = nameLike)
  agentid && (where.agentid = agentid)
  cityid && (where.cityid = cityid)
  leadid && (where.leadid = leadid)
  createdAt && (where.createdAt = createdAt)
  return await leadManagementRepository.getLeads({ where })
}

const createOrUpdateLead = async ({ name, createdAt, agentid, cityid, leadid }) => {
  if (leadid) {
    const where = {}
    leadid && (where.leadid = leadid)
    const updateValues = {}
    name && (updateValues.name = name)
    createdAt && (updateValues.createdAt = createdAt)
    agentid && (updateValues.agentid = agentid)
    cityid && (updateValues.cityid = cityid)
    return await leadManagementRepository.updateLeadDetails({ updateValues, where })
  }
  return await leadManagementRepository.createLead({ name, agentid, cityid, createdAt })
}

const updateLeads = async ({ where, updateValues }) => {
  return await leadManagementRepository.updateLeadDetails({ updateValues, where })
}

const deleteLead = async ({ leadid }) => {
  const where = { leadid }
  return await leadManagementRepository.deleteLead({ where })
}

module.exports = {
  createOrUpdateLead,
  getLeads,
  deleteLead,
  updateLeads
}