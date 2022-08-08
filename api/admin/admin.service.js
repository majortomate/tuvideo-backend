const Admin = require('./Admin.model.js')

const getAdmin = id => Admin.findById(id)

const findAdminByEmail = email => Admin.findOne({ email })

const createAdmin = admin => Admin.create(admin)

const updateAdmin = (id, admin) => Admin.findByIdAndUpdate(id, admin, { new: true })

const deleteAdmin = id =>  Admin.findByIdAndRemove(id)

module.exports = {
  getAdmin,
  findAdminByEmail,
  createAdmin,
  updateAdmin,
  deleteAdmin
}
