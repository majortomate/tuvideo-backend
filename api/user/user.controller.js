/* Controller for user */
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const { sendMailSendGrid } = require('../../utils/mail.js')
const { signToken } = require('../../auth/auth.service.js')

const {
  registerUser,
  getSingleUser,
  findUserByEmail,
  findUserByUsername,
  findOneUser,
  updateUser,
  deleteUser,
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
    const user = getSingleUser(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);

  } catch (error) {
    return res.status(500).json({ error: 'There was an error' });
  }
}

const loginUserHandler = async (req, res) => {
  const { id } = req.params
  try {
    const user = await getSingleUser(id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.json(user)

  } catch (error) {
    return res.status(500).json({ error: "There was an error" })
  }
}

const registerUserHandler = async (req, res) => {
  let userData = req.body
  let password = req.body.password

  const emailHash = crypto.createHash('sha256')
    .update(userData.email)
    .digest('hex');

  userData.passwordResetToken = emailHash;
  userData.passwordResetExpires = Date.now() + 3_600_000 * 24; // 24 hour

  const salt = await bcrypt.genSalt()
  const hash = await bcrypt.hash(password, salt)

  userData.password = hash

  try {
    const user = await registerUser(userData)

    // Send email to user
    const message = {
      from: '"no-reply" <publicidad@stardustdigital.co>', // sender address
      to: user.email, // list of receivers
      subject: 'Activate account ', // Subject line
      template_id: 'd-48fe57f4ab214ddc922e6801c679a18a', // template id
      dynamic_template_data: {
        username: user.username,
        url: `${process.env.FRONTEND_URL}/verify-account/${hash}`,
      },
    };

    await sendMailSendGrid(message);
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }

}

const resetUserPasswordHandler = async (req, res) => {

}

const verifyUserHandler = async (req, res) => {
  console.log('is working /////////////////////////////')
  const { token } = req.params;

  try {
    const user = await findOneUser({ passwordResetToken: token });////////

    if (!user) {
      return res.status(404).json({ message: 'Invalid token' });
    }

    if (Date.now() > user.passwordResetExpires) {
      return res.status(404).json({ message: 'Token expired' });
    }

    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    user.isActive = true;

    await user.save();

    const jwtoken = signToken({ email: user.email });///////////

    return res.status(200).json({
      token: jwtoken,
      profile: user.profile,
      message: 'Account activated',
    });
  } catch (error) {
    return res.status(500).json({ error });
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
  registerUserHandler,
  resetUserPasswordHandler,
  loginUserHandler,
  updateUserHandler,
  deleteUserHandler,
  verifyUserHandler,
}
