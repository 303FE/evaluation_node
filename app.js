var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

require('./db')

var index = require('./routes/index')
var user = require('./routes/user')
var test = require('./routes/test')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Auth 认证
app.use(function (req, res, next) {
  req.headers.authorization = req.headers.authorization || ''
  require('./util/authHelper')
    .doAuth(req.path, req.headers.authorization)
    .then(res =>{
      if (res) {
        next()
      } else throw null
    })
    .catch(() => {
      res.send('非法访问')
    })
})

app.use('/', index)
app.use('/user', user)
app.use('/test', test)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('消失在异次元~')
  err.status = 404;
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

module.exports = app
