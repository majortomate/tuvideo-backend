const bcrypt = require('bcryptjs')
const Admin = require('./Admin.model.js')

const {
  getAdmin,
  findAdminByEmail,
  createAdmin,
  validateEmailAdmin,
  validatePasswordAdmin,
  updateAdmin,
  deleteAdmin
} = require('./admin.service.js')

const getAdminHandler =  async (req, res) => {
  const { id } = req.params
  try {
    const admin = await getAdmin(id)

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' })
    }
    return res.json(admin)

  } catch (error) {
    return res.status(500).json({ error: "There was an error finding admin"})
  }
}
const createAdminHandler = async (req, res) => {

  let adminData = req.body
  let password =  req.body.password

  const salt = await bcrypt.genSalt()
  const hash = await bcrypt.hash(password, salt)

  adminData.password = hash

  try {
    const admin = await createAdmin(adminData)
    return res.status(201).json(admin)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const updateAdminHandler = async (req, res) => {}

const deleteAdminHandler = async (req, res) => {}

const validateAdminHandler = async (req, res) =>{
  const {email, password} = req.body

  const AdminFound = await validateEmailAdmin(email)

  if(!AdminFound) {
    res.status(404).send("User Admin not found")
  }
  const matched = await bcrypt.compare(password, AdminFound.password)

  if(matched){
    res.status(200).send("Access granted")
  }
  res.status(404).send("wrong credentials")

}

module.exports = {
  createAdminHandler,
  getAdminHandler,
  updateAdminHandler,
  deleteAdminHandler,
  validateAdminHandler
}
