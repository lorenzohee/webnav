const path = require('path');
const express = require('express');
const httpError = require('http-errors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes/index');
const config = require('./config');
const passport = require('./passport')
var fs = require('fs');//文件模块
var FileStreamRotator = require('file-stream-rotator');

const app = express();

//设置日志文件目录
var logDirectory = path.join(__dirname, '../../logs');
//确保日志文件目录存在 没有则创建
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
//创建一个写路由
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/nav-%DATE%.log',
  frequency: 'daily',
  verbose: false
})

// 自定义token
logger.token('from', function (req) {
  return req.query.from || '-';
});
// 自定义format，其中包含自定义的token
logger.format('joke', '[joke] :method :url :status :from');

if (config.env === 'development') {
  // 使用自定义的format
  app.use(logger('joke'));
}

app.use(logger('combined', { stream: accessLogStream }));//写入日志文件

var distDir = '../../dist/';

app.use(express.static(path.join(__dirname, distDir)))
app.use(express.static(path.join(__dirname, '../../uploads')))
app.use(/^((?!(api)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname, distDir + '/index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(passport.initialize());

// API router
app.use('/api/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new httpError(404)
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {

  // customize Joi validation errors
  if (err.isJoi) {
    err.message = err.details.map(e => e.message).join("; ");
    err.status = 400;
  }

  res.status(err.status || 500).json({
    message: err.message
  });
  next(err);
});

module.exports = app;
