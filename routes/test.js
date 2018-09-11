const express = require('express');
const router = express.Router();
const userService = require('../services/userService')
const questionService = require('../services/questionService')
const collegeService = require('../services/collegeService')
const courseService = require('../services/courseService')
const paperService = require('../services/paperService')
const paperResultService = require('../services/paperResultService')
const teacherCourseService = require('../services/teacherCourseService')
const studentService = require('../services/studentService')
const teacherService = require('../services/teacherService')



const resultHelper = require('../util/resultHelper')

router.get('/stu', function (req, res) {
  studentService
    .getCourseList('5b94bbf0e28c8f35c0a98437')
    .then(rel => {
      res.send(rel)
    })

})

router.get('/sets', function (req, res) {
  studentService
    .setCourses(['5b94bbf0e28c8f35c0a98437', '5b94bbf0e6668f35c0a98437'], [{
      "course" : "5b95d77ee17cf02cf8f30409",
      "teacher" : "5b95d77ee17cf02cf8f30409"
    },{
      "course" : "5b95d81f0611720a2c6a3d75",
      "teacher" : "5b95d77ee17cf02cf8f30409"
    },{
      "course" : "5b95d77ee17cf02cf8f30409",
      "teacher" : "5b95d77ee17cf02cf8f30409"
    }])
    .then(rel => {
      res.send(rel)
    })

})

router.get('/pas', function (req, res) {
  studentService
    .resetPassword(['5b94bbf0e28c8f35c0a98437', '5b94bbf0e6668f35c0a98437'])
    .then(rel => {
      res.send(rel)
    })
})
router.get('/inser', function (req, res) {
  teacherService
    .getPaperResultList('5b95d77ee17cf02cf8f30409')
    .then(rel => {
      res.send(rel)
    })
})
module.exports = router;