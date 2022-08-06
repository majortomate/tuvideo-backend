/**
 * Main application routes
 */
const user = require('./api/user/index.js')
const routes = function(app) {
   app.use('/api/users', user)
}
 
module.exports = routes
