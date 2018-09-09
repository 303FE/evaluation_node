const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paperResultSchema = new Schema({
    status: Boolean,
    paperId: {
        type: ObjectId,
        ref: 'paper'
    },
    userId: String,
    teacherId: {
        type: ObjectId,
        ref: 'teacher'
    },
    courseId: {
        type: ObjectId,
        ref: 'course'
    },
    grade: Number,
    suggest: String,
    type: Number,
})


module.exports = mongoose.model('paperResult', paperResultSchema)