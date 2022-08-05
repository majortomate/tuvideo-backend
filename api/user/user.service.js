const { User } = './user.model.js'

const getSingleUser = function(id) {
  return User.findById(id)
}

const findUserByEmail = function(email) {
  return User.findOne({ email })
}

const createUser = function(user) {
  return User.create(user)
}

const updateUser = function(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true })
}

const deleteUser = function(id) {
  return User.findByIdAndRemove(id)
}

module.exports = {
  getSingleUser,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser
}
