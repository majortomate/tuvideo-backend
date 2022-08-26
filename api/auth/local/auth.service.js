const jwt = require('jsonwebtoken');

const { findUserByEmail } = require('../../user/user.service')


const signToken = (payload) => {
  const token = jwt.sign(
    payload, 
    'C0SA5_D3_S3N10R', 
    { expiresIn: '1h' }, 
  );
  return token;
}


const verifyToken = async (token) =>{
  try {
    const payload = await jwt.verify(token, 'C0SA5_D3_S3N10R');
    return payload;
  } catch (error) {
    return null;
  }
}

async function isAuthenticated(req, res, next) {
  const authHeader = req.headers?.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  // validate token
  const decoded = await verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // add user to request
  const { email } = decoded;
  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  req.user = user;

  next();
  return true;
}

function hasRole(rolesRequired) {
  return (req, res, next) => {
    const { role } = req.user;

    if (rolesRequired.includes(role)) {
      next();
      return true;
    }

    return res.status(401).json({ message: 'Unauthorized' });
  };
}

module.exports = {
  isAuthenticated,
  signToken,
  hasRole,
  verifyToken,
};
