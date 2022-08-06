/**
 * Controller for user
 */
const  {
  createUser,
  getSingleUser,
  findUserByEmail,
  updateUser,
  deleteUser,
} = require('./user.service.js')

const getSingleUserHandler =  async function(req, res) {
  const { id } = req.params
  try {
    const user = await getSingleUser(id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const createUserHandler = async function(req, res) {
  const userData = req.body

  try {
    const user = await createUser(userData)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const updateUserHandler = async function(req, res) {}

const deleteUserHandler = async function(req, res) {}

module.exports = {
  getSingleUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler
}
