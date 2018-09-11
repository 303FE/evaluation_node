const express = require('express')
const router = express.Router()


router.get('/', function(req, res) {
  res.render('index', { title: 'evaluation 教师评测系统' })
})

module.exports = router
