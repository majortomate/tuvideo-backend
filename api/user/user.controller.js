const {
  getSingleUser,
  findUserByEmail,
  updateUser,
} = require('./user.service.js')

const findUserByEmailHandler = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);

  } catch (error) {
    return res.status(500).json({ error: 'There was an error' });
  }
}

const getSingleUserHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getSingleUser(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);

  } catch (error) {
    return res.status(500).json({ error: 'There was an error' });
  }
}

const updateUserHandler = async (req, res) => {
  const { id } = req.params;
  const currentUser = req.body;

  try {
    const user = await updateUser(id, currentUser);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'There was an error' });
  }
}

const deleteUserHandler = async (req, res) => { }

module.exports = {
  findUserByEmailHandler,
  getSingleUserHandler,
  updateUserHandler,
  deleteUserHandler,
}