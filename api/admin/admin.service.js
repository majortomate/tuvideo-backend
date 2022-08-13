const Admin = require('./Admin.model.js')

const getAdmin = id => Admin.findById(id)

const findAdminByEmail = email => Admin.findOne({ email })

const createAdmin = admin => Admin.create(admin)

const updateAdmin = (id, admin) => Admin.findByIdAndUpdate(id, admin, { new: true })

const deleteAdmin = id =>  Admin.findByIdAndRemove(id)

const validateEmailAdmin = (email) => Admin.findOne({email: email})
const validatePasswordAdmin = (password) => Admin.findOne({password: password})

module.exports = {
  getAdmin,
  findAdminByEmail,
  createAdmin,
  updateAdmin,
  validateEmailAdmin,
  validatePasswordAdmin,
  deleteAdmin
}
