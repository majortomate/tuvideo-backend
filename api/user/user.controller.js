const {
  getSingleUser,
  findUserByEmail,
  updateUser,
} = require('./user.service.js')

const fs = require('fs-extra');
const { UploadImage } = require('../../utils/cloudinary')

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
  let logo = undefined;
  let banner = undefined;
  if (req.files['logo']) {
    logo = req.files['logo'][0];
  }
  if (req.files['banner']) {
    banner = req.files['banner'][0];
  }

  const currentUser = req.body;

  console.log(req.files);
  console.log(logo, " ", banner);

  try {
    if (logo) {
      const result = await UploadImage(logo.path)
      currentUser.logo = result.secure_url
      await fs.unlink(logo.path)
    }
    if (banner) {
      const result = await UploadImage(banner.path)
      currentUser.banner = result.secure_url
      await fs.unlink(banner.path)
    }

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
