var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const alumniRoute = require('./app/Alumni/router');
const commentRoute = require('./app/Comment/router');
const courseRoute = require('./app/Course/router');
const discussRoute = require('./app/Discuss/router');
const followRoute = require('./app/Follow/router');
const majorRoute = require('./app/Major/router');
const universiyRoute = require('./app/University/router');
const userRoute = require('./app/User/router');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(alumniRoute);
app.use(commentRoute);
app.use(courseRoute);
app.use(discussRoute);
app.use(followRoute);
app.use(majorRoute);
app.use(universiyRoute);
app.use(userRoute);

//home
app.use('/', function(req,res){
  res.render('index',{
    title: 'API Service'
  });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
