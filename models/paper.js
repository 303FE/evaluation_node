const mongoose  = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Schema = mongoose.Schema({
  type: Number,
  typeId: String,
  title: String,
  questions: [{
    type: ObjectId,
    ref: 'question'
  }],
  startTime: String,
  endTime: String
})
module.exports = mongoose.model('paper', Schema)