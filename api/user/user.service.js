const User = require('./user.model.js')

const getSingleUser = id => User.findById(id).populate('subscribedChannels')

const findUserByEmail = (email) => User.findOne({ email })

const findOneUser = (query) => User.findOne(query);

const registerUser = user => User.create(user)

const updateUser = (id, user) => User.findByIdAndUpdate(id, user, { new: true })

const deleteUser = id => User.findByIdAndRemove(id)

const findUserByUsername = username => User.findOne({ username })


module.exports = {
  getSingleUser,
  findUserByEmail,
  findUserByUsername,
  findOneUser,
  registerUser,
  updateUser,
  deleteUser,
}
