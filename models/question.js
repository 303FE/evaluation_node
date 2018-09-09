const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    content: String,
})


module.exports = mongoose.model('question', questionSchema)