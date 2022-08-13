/**
 * Main application routes
 */
const user = require('./api/user/index.js')
const video = require('./api/video/index.js')
const channel = require('./api/channel/index.js')
const admin = require('./api/admin/index.js')
const routes = function (app) {
  app.use('/api/users', user)
  app.use('/api/videos', video)
  app.use('/api/channel', channel)
  app.use('/api/admin', admin)
}

module.exports = routes
