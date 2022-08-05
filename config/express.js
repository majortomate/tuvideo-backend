const express = require('express')
const morgan = require('morgan')


function configExpress(app) {
  // CORS
  app.use(express.json())
  app.use(morgan('dev'))
}

module.exports = configExpress
