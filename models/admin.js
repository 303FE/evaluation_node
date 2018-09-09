const mongoose  = require('mongoose')
const Schema = mongoose.Schema({
  num: String,
  password: String
})
module.exports = mongoose.model('admin', Schema)