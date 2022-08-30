/* Main application routes */

const user = require('./api/user/index.js')
const auth = require('./api/auth/local/index.js')
const video = require('./api/video/index.js')
const admin = require('./api/admin/index.js')
const upload = require('./api/upload/index.js')
const search = require('./api/search/index.js')
const { checkout } = require('./api/user/index.js')

const routes = function (app) {
  app.use('/api/users', user)
  app.use('/api/auth', auth)
  app.use('/api/videos', video)
  app.use('/api/admin', admin)
  app.use('/api/upload', upload)
  app.use('/api/search', search)
  app.use('/api/checkout', checkout)
}

module.exports = routes
