const mongoose  = require('mongoose')
const Schema = mongoose.Schema({
  name: String,
  password: String
})

Schema.statics = {
  login: function ({name, password}, cb) {
    return this.findOne({name, password}, cb)
  }
}
module.exports = mongoose.model('admin', Schema)