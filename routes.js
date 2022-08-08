/**
 * Main application routes
 */
const user = require('./api/user/index.js')
const video = require('./api/video/index.js')
const routes = function(app) {
   app.use('/api/users', user)
   app.use('/api/videos', video)
}
 
module.exports = routes
