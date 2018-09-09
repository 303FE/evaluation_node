var express = require('express');
var router = express.Router();
const userService = require('../services/userService')
const questionService = require('../services/questionService')
const collegeService = require('../services/collegeService')
const courseService = require('../services/courseService')
const paperService = require('../services/paperService')


const resultHelper = require('../util/resultHelper')
/* GET users listing. */
router.get('/', function(req, res, next) {
  /*userService
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
    paperService.createPaper({
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
    })
});

module.exports = router;
