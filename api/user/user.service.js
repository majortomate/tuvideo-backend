const User = require('./user.model.js')

const getSingleUser = id => User.findById(id)

const findUserByEmail = email => User.findOne({ email })

const createUser = user => User.create(user)

const updateUser = (id, user) => User.findByIdAndUpdate(id, user, { new: true })

const deleteUser = id =>  User.findByIdAndRemove(id)

module.exports = {
  getSingleUser,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser
}
