const studentModel = require('../models/student')

/**
 * 获取课程列表
 * @param id
 */
const getCourseList = id => {
  studentModel
    .findOne({_id: id}, {courses: []})
    .populate('courses.course', 'name')
    .populate('courses.teacher', 'name')
    .exec((err, res) => {
      console.log(res)
    })

}

module.exports = {
  getCourseList
}