var express = require('express')
var router = express.Router()
const userService = require('../services/userService')
const resultHelper = require('../util/resultHelper')

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

module.exports = router