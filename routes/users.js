var express = require('express');
var router = express.Router();
const Admin = require('../models/admin')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var boen = new Admin({
  //   name: 'boen',
  //   password: '123456'
  // })
  // boen.save()
 Admin.login({name: 'boen',
    password: '123456'
  }, function (err, con) {
   console.log(con);
   res.send(con);
 })
});

module.exports = router;
