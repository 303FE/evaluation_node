const mongoose  = require('mongoose')
const Schema = mongoose.Schema({
  name: String
})

Schema.statics = {}
module.exports = mongoose.model('college', Schema)