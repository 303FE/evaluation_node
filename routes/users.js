var express = require('express');
var router = express.Router();
const Admin = require('../models/admin')

/* GET users listing. */
router.get('/', function(req, res, next) {
 Admin.login({name: 'boen',
    password: '123456'
  }, function (err, con) {
   console.log(con);
   res.send(con);
 })
});

module.exports = router;