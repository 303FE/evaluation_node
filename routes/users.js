var express = require('express');
var router = express.Router();
const userService = require('../services/userService')
const questionService = require('../services/questionService')
const collegeService = require('../services/collegeService')
const courseService = require('../services/courseService')
const paperService = require('../services/paperService')
const paperResultService = require('../services/paperResultService')
const teacherCourseService = require('../services/teacherCourseService')



const resultHelper = require('../util/resultHelper')

/* GET users listing. */
router.get('/', function(req, res, next) {
    /*userService
  =======

  router.get('/login', function(req, res, next) {
    userService
  >>>>>>> c845f51de83123b9522c31d208758664f1ebbc67
      .login({type: 2, num: '159001015', password: '123'})
      .then(rel =>{
        if (rel) {
          res.send(resultHelper.success(rel, '成功'))
        } else {
          res.send(resultHelper.failed( '账号或密码错误'))
        }
      })
      .catch(() =>{
        res.send(resultHelper.failed('系统错误'))
      })*/
    /*questionService.createQuestion({content: '题目3'}).
        then(rel => {
            console.log(rel)
            res.send('lalala')
    })*/
    /*collegeService.updateCollege({_id: '5b94eb198745c5099cb02329', name: '软件与计算机'}).
        then(rel => {
            console.log(rel)
            res.send(rel)
    })*/
    /*paperService.createPaper({
        title: '试卷2',
        questions: ['5b94e5992e313e08949cf646','5b94f41be3301e24500fd3fa','5b94f43e18637c2fd884c5f3'],
        endTime: '',
        startTime: '',
        type: 0,
        typeId: 1,
    }).
        then(rel => {
            console.log(rel)
            res.send(rel)
        })*/
    /*paperResultService.createPaperResult({userId:'5b9499af02b1aa1d400a0fab', teacherId:'5b95d77ee17cf02cf8f30409', courseId:'5b95d8842e4ec52b243c0f64', type: 0}).
        then(rel=> {
            console.log(rel)
            res.send(rel)
    })*/
    /*paperResultService.updatePaperResult({_id: '5b95da6867e9e720bc7f7cdc', grade: 80, suggest: '张老师牛逼'}).
        then(rel=> {
            console.log(rel)
            res.send(rel)
    })*/
    /*courseService.createCourse({name: '人机交互界面设计'}).
        then((rel) => {
            console.log(rel)
            res.send(rel)
    })*/
    teacherCourseService.createTeacherCourse({tId: '5b95d77ee17cf02cf8f30409', cId: '5b95d81f0611720a2c6a3d75'}).
        then(rel => {
            console.log(rel)
            res.send(rel)
    })

});

router.post('/changePassword', function(req, res) {
    let params = Object.assign({
        type: 0,
        id: '',
        password: '',
        newPass: ''
    }, req.body)
    userService
        .changePassword(params)
        .then(rel =>{
            if (rel) {
                res.send(resultHelper.success({}, '修改成功'))
            } else {
                res.send(resultHelper.failed( '修改失败'))
            }
        })
        .catch(() =>{
            res.send(resultHelper.failed('系统错误'))
        })

});

module.exports = router;