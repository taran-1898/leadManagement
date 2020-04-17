const db = require('../models')

const updateLeadDetails = async ({ updateValues, where }) => {
  return await db.leads.update(updateValues, { where })
}

const createLead = async (values) => {
  return await db.leads.upsert(values)
}

const getLeads = async ({ where }) => {
  return await db.leads.findAll({
    where,
    raw: true
  })
}

const deleteLead = async ({ where }) => {
  return await db.leads.destroy({ where })
}

module.exports = {
  createLead,
  updateLeadDetails,
  getLeads,
  deleteLead
}