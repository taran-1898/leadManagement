// require needed services
const cityService = require('../services/city')

// Common controller for creation and/or updation of cities

const createOrUpdateCity = async (request, response) => {
  try {
    const { cityName, cityDetails, cityid } = request.body
    // update a specific city
    if (cityid) {
      if (!cityName && !cityDetails) return
      else {
        const city = await cityService.createOrUpdateCity({ cityDetails, cityName, cityid })
        return response.json({
          status: 0,
          data: city,
        })
      }
    }
    else if (!cityName) throw 'Please specify city name'
    // create new city
    const city = await cityService.createOrUpdateCity({ cityDetails, cityName })
    response.json({
      status: 0,
      data: city,
    })
  } catch (err) {
        response.json({
      status: -1,
      message: err,
    })
  }
}

// Function to get cities

const getCities = async (request, response) => {
  try {
    let { cityName, cityid } = request.query
    const cityNameLike = cityName ? `%${cityName}%` : ''
    cityid = cityid ? cityid : ''
    const cities = await cityService.getCities({ cityid, cityNameLike })
    response.json({
      status: 0,
      data: cities,
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
  createOrUpdateCity,
  getCities
}