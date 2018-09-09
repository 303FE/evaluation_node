const mongoose  = require('mongoose')
const Schema = mongoose.Schema({
  name: String,
  password: String
})

module.exports = mongoose.model('admin', Schema)