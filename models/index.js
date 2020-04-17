'use strict'
// require needed services

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const config = require(__dirname + '/../config/db.json')
const db = {}
let sequelize = null

config.dialectOptions.typeCast = (field, next) => {
  if (field.type === 'DATEONLY') {
    return field.string() && new Date(field.string())
  }
  return next()
}

// sequelize connection to mysql using config file
sequelize = new Sequelize(config.database, config.username, config.password, config)

// read model files
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db