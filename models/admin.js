const mongoose  = require('mongoose')
const Schema = mongoose.Schema({
  token: String,
  num: String,
  password: String
})

module.exports = mongoose.model('admin', Schema)