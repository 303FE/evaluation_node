const adminModel = require('../models/admin')
const studentModel = require('../models/student')
const teacherModel = require('../models/teacher')
const models = {
  '/admin': adminModel,
  '/student': studentModel,
  '/teacher': teacherModel
}

const doAuth = (path, token) =>{
  let key = null
  return new Promise((resolve, reject) => {
    for (let i of Object.keys(models)) {
      if (path.indexOf(i) >= 0) {
        key = i
        break
      }
    }
    if (key) {
      models[key].findOne({token}).exec((err, rel) => {
        !err?resolve(!!rel):reject(err)
      })
    } else {
      resolve(true)
    }
  })
}

const createToken = () => {
  return Math.random()
}

module.exports = {
  doAuth,
  createToken
}