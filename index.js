const express = require('express');
require('dotenv').config();

const configExpress = require('./config/express.js')
const routesConfig = require('./routes.js')
const connectDatabase = require('./config/database.js')

const app = express();

const PORT = process.env.PORT || 8080
const NODE_ENV = process.env.NODE_ENV || 'development'


app.listen(PORT, async () => {
  // Configure express
  configExpress(app)

  // Connect to database
  await connectDatabase()

  // Configure routes
  routesConfig(app)

  console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`)
})

