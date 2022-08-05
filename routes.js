/**
 * Main application routes
 */
const { user } = './api/user/index.js'
 
function routes(app) {
   app.use('/api/users', user)
}
 
module.exports = routes
