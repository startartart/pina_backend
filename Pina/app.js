var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
var { sequelize} = require('./models');
var app = express();
var flash = require('connect-flash');
sequelize.sync();

// view engine setup
app.engine('html',require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'asadlfkj!@#!@#dfgasdg',
  resave: false,
  saveUninitialized: true,
  store:new FileStore()
}));
app.use(flash());
const {User} = require('./models');


var passport = require('./passport')(app);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users')(passport);

  
app.use('/', indexRouter);
app.use('/users', usersRouter);




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
  res.render('error.jade');
});

module.exports = app;
