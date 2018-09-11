const adminModel = require('../models/admin')
const studentModel = require('../models/student')
const teacherModel = require('../models/teacher')
const authHelper = require('../util/authHelper')
const models = [studentModel, teacherModel, adminModel]

/**
 *
 * @param type 0 学生 1 老师 2 管理员
 * @param num
 * @param password
 */
const login = ({type, num, password}) => {
  return new Promise((resolve, reject) => {
    models[type]
      .findOne({ num, password },{token: authHelper.createToken()})
      .exec((err, rel) => {
      rel?rel.password = '':null
      err?reject(err):resolve(rel)
    })
  })
}

/**
 * 修改密码
 * @param type 0 学生 1 老师 2 管理员
 * @param id
 * @param password
 * @param newPass
 * @returns {Promise<any>}
 */
const changePassword = ({type, id, password, newPass}) => {
  return new Promise((resolve, reject) => {
    models[type]
      .updateOne({ _id: id, password }, { password: newPass })
      .exec((err, rel) => {
      err?reject(err):resolve(rel.n>0)
    })
  })
}

/**
 * 退出登录
 * @param type
 * @param id
 * @returns {Promise<any>}
 */
const loginOut = ({type, id}) => {
  return new Promise((resolve, reject) => {
    models[type]
      .updateOne({ _id: id }, { token: authHelper.createToken()})
      .exec((err, rel) => {
        err?reject(err):resolve(rel.n>0)
      })
  })
}

module.exports = {
  login,
  changePassword,
  loginOut
}