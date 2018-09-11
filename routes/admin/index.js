const express = require('express')
const router = express.Router()

// ===== 课程相关接口 ================
require('./course')(router)
// ========= 院系相关接口 =============
require('./college')(router)
// ====  评测卷相关接口
require('./paper')(router)
// ==== 题目相关接口
require('./question')(router)

module.exports = router