const teacherModel = require('../models/teacher')
const paperResult = require('../models/paperResult')

/**
 * 批量增加老师
 * @param arr
 * @returns {arr}
 */
const insertTeachers = arr => {
  return teacherModel.create(arr)
}

/**
 * 修改老师信息
 * @param ids
 * @param teac
 * @returns {Promise<any>}
 */
const updateTeachers = (ids, teac) => {
  return new Promise((resolve, reject) => {
    teacherModel
      .updateMany({_id: {$in: ids}}, {$set: {...teac}})
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
    teacherModel
      .updateMany({_id: {$in: ids}}, {$set: {password}})
      .exec((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}

/**
 * 教师查看自己评教结果
 * @param id
 */
const getPaperResultList = id => {
  return new Promise((resolve, reject) => {
    paperResult
      .find({
        status: true,
        teacher: id
      }, ['-userId','-teacher','-status','-type'])
      .populate('paper', 'title')
      .populate('course', 'name')
      .exec((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}

/**
 * 获取全校教师
 * lp
 * @returns {Promise<any>}
 */
const getAllTeacher = (condition) => {
    return new Promise((resolve, reject) => {
        teacherModel
            .find(condition)
            .exec((err, res) => {
                err ? reject(err) : resolve(res)
            })
    })
}


module.exports = {
  insertTeachers,
  updateTeachers,
  getPaperResultList,
  resetPassword,
  getAllTeacher
}