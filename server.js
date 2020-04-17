/**
 * Variable Delaration
 * @type {[type]}
 */
const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
process.SEQ_OP = Sequelize.Op
process.SEQ_literal=Sequelize.literal

app.use(bodyParser.json({
  extended: false,
  limit: '5mb'
}))
// configuration ======================================================= 
require('./models')
app.use('/', require('./routes'))

// Start the server
app.set('port', 3000)
const server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + server.address().port)
})

module.exports = app