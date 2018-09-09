const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paperResultSchema = new Schema({
    status: Boolean,
    paperId: ObjectId,
    userId: ObjectId,
    teacherId: ObjectId,
    courseId: ObjectId,
    grade: Number,
    suggest: String,
    type: Number,
})

module.exports = mongoose.model('PaperResult', paperResultSchema)