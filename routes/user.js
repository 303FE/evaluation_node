const express = require('express')
const router = express.Router()
const userService = require('../services/userService')
const resultHelper = require('../util/resultHelper')

/**
 * 登录
 */
router.post('/login', function(req, res) {
  let params = Object.assign({
    type: 0,
    num: '',
    password: ''
  }, req.body)
  userService
    .login(params)
    .then(rel =>{
      if (rel) {
        res.send(resultHelper.success({}, '登录成功'))
      } else {
        res.send(resultHelper.failed( '账号或密码错误'))
      }
    })
    .catch(() =>{
      res.send(resultHelper.failed('系统错误'))
    })

})
/**
 * 修改密码
 */
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

})

/**
 * 登出
 */
router.get('/loginOut', function(req, res) {
  userService
    .loginOut({
      type: req.query.type,
      id: req.query.id
    })
    .then(rel =>{
      if (rel) {
        res.send(resultHelper.success({}, '成功'))
      } else {
        res.send(resultHelper.failed( '登出失败'))
      }
    })
    .catch(() =>{
      res.send(resultHelper.failed('系统错误'))
    })

})

module.exports = router