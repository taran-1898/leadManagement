const cityRepository = require('../repositories/city')
const OP = process.SEQ_OP

const createOrUpdateCity = async ({ cityDetails, cityName, cityid }) => {
  if (cityid) {
    const where = { cityid }
    const updateValues = {}
    cityDetails && (updateValues.cityDetails = cityDetails)
    cityName && (updateValues.cityName = cityName)
    return await cityRepository.updateCity({ updateValues, where })
  }
  return await cityRepository.createCity({ cityDetails, cityName })
}

const getCities = async ({ cityid, cityNameLike }) => {
  const where = {}
  cityNameLike && (where.cityName = {[OP.like] : `%${cityNameLike}%`})
  cityid && (where.cityid = cityid)
  return await cityRepository.getCities({ where })
}

module.exports = {
  createOrUpdateCity,
  getCities
}