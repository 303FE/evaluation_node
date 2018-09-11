const express = require('express')
const router = express.Router()
const studentService = require('../services/studentService')
const resultHelper = require('../util/resultHelper')

router.get('/courseList', function (req, res) {
  let id = req.query.id || ''
  studentService
    .getCourseList(id)
    .then(rel => {
      res.send(resultHelper.success(rel))
    })
    .catch(() => {
      res.send(resultHelper.failed('参数错误'))
    })
})

module.exports = router