const adminModel = require('../models/admin')
const studentModel = require('../models/student')
const teacherModel = require('../models/teacher')

/**
 *
 * @param type 0 学生 1 老师 2 管理员
 * @param num
 * @param password
 */
const login = ({type, num, password}) => {
  const list = [studentModel, teacherModel, adminModel]
  return new Promise((resolve, reject) => {
    list[type].findOne({num, password}).exec((err, rel) => {
      rel?rel.password = '':null
      err?reject(err):resolve(rel)
    })
  })
}

module.exports = {
  login
}