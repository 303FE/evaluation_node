const studentModel = require('../models/student')

/**
 * 批量增加学生
 * @param arr
 * @returns {arr}
 */
const insertStudents = arr => {
  return studentModel.create(arr)
}

/**
 * 修改学生信息
 * @param ids
 * @param stu
 * @returns {Promise<any>}
 */
const updateStudents = (ids, stu) => {
  return new Promise((resolve, reject) => {
    studentModel
      .updateMany({_id: {$in: ids}}, {$set: {...stu}})
      .exec((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}

/**
 * 批量重置密码
 * @param ids
 * @returns {Promise<any>}
 */
const resetPassword = ids =>{
  const password = '123456'
  return new Promise((resolve, reject) => {
    studentModel
      .updateMany({_id: {$in: ids}}, {$set: {password}})
      .exec((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}

/**
 * 获取课程列表
 * @param id
 */
const getCourseList = id => {
  return new Promise((resolve, reject) => {
    studentModel
      .findOne({_id: id}, {teacherCourses: []})
      .populate({
        path: 'teacherCourses',
        populate: {
          path: 'teacher course',
          select: 'name'
        }
      })
      .exec((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}

/**
 * 给学生设置 课程-老师 关系
 * @param stus
 * @param courses
 * @returns {Promise<any>}
 */
const setCourses = (stus, courses) => {
  return new Promise((resolve, reject) => {
    studentModel
      .updateMany({_id: {$in: stus}}, {$set: {courses}})
      .exec((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}

module.exports = {
  insertStudents,
  updateStudents,
  getCourseList,
  setCourses,
  resetPassword
}