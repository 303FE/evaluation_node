var express = require('express');
var router = express.Router();
const userService = require('../services/userService')
const resultHelper = require('../util/resultHelper')

router.get('/login', function(req, res, next) {
  userService
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
