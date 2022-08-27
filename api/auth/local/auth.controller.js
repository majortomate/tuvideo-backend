const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const { sendMailSendGrid } = require('../../../utils/mail')
const { signToken } = require('./auth.service')


const {
  findUserByEmail,
  registerUser,
  findOneUser,
} = require('../../user/user.service')

const loginUserHandler = async (req, res, next) => {
  const { email, password } = req.body

  const user = await findUserByEmail(email)

  if (!user) {
    return res.status(404).json({ message: 'Wrong credentials' })
  }

  const userPassword = user.password;

  try {
    const matchPassword = await bcrypt.compare(password, userPassword);
    if (!matchPassword) {
      return res.status(404).json({ message: 'Wrong password' })
    }
    const token = signToken({ email: user.email });
    next();

    return res.status(200).json({ token, profile: user.profile });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" })
  }

}

const registerUserHandler = async (req, res) => {
  let userData = req.body
  let { email, password } = req.body;
  const userFound = await findUserByEmail(email);

  if (userFound) {
    return res.status(404).json({ message: "User already registered" })
  }

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
        url: `https://tuvideo-backend.herokuapp.com/api/auth/verify-account/${emailHash}`,
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
  const { token } = req.params;


  try {
    const user = await findOneUser({ passwordResetToken: token });

    if (!user) {
      return res.status(404).json({ message: 'Invalid token' });
    }

    if (Date.now() > user.passwordResetExpires) {
      return res.status(404).json({ message: 'Token expired' });
    }

    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    user.isActive = true;
    console.log(user)
    await user.save();

    const jwtoken = signToken({ email: user.email });

    return res.status(200).json({
      token: jwtoken,
      profile: user.profile,
      message: 'Account activated',
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  registerUserHandler,
  resetUserPasswordHandler,
  loginUserHandler,
  verifyUserHandler,
}
