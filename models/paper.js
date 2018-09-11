const mongoose  = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Schema = mongoose.Schema({
  // 0 未发布 1 发布中 2 已发布
  status: Number,
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