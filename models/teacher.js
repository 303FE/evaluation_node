const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teacherScheme = new Schema({
    num: String,
    name: String,
    password: String,
    collegeId: {
        type: ObjectId,
        ref: 'college'
    },
})


module.exports = mongoose.model('teacher', teacherScheme)