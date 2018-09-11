const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const paperResultSchema = new Schema({
    status: Boolean,
    paper: {
        type: ObjectId,
        ref: 'paper'
    },
    userId: String,
    teacher: {
        type: ObjectId,
        ref: 'teacher'
    },
    course: {
        type: ObjectId,
        ref: 'course'
    },
    grade: Number,
    suggest: String,
    type: Number,
})


module.exports = mongoose.model('paperResult', paperResultSchema)