const db = require('../models')

const updateCity = async ({ updateValues, where }) => {
  return await db.cities.update(updateValues, { where })
}

const createCity = async (values) => {
  return await db.cities.upsert(values)
}

const getCities = async ({ where }) => {
  return await db.cities.findAll({
    where,
    raw: true
  })
}

module.exports = {
  createCity,
  updateCity,
  getCities
}