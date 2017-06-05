'use strict'

const express = require('express')
const path = require('path')

/* app 实例 */
const app = express()

//静态资源路径
app.use(express.static(path.join(__dirname, '/doc')))

/* 404 */
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  next(err);
});

module.exports = app
