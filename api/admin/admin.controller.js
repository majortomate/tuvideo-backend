const {
  createAdminHandler,
  getAdminHandler,
  updateAdminHandler,
  deleteAdminHandler,
} = require('./admin.service')

const getAdminHandler =  async (req, res) => {
  const { id } = req.params
  try {
    const admin = await getAdminHandler(id)

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' })
    }
    return res.json(admin)

  } catch (error) {
    return res.status(500).json({ error: "There was an error finding admin"})
  }
}

const createAdminHandler = async (req, res) => {
  const adminData = req.body

  try {
    const admin = await createAdmin(adminData)
    return res.status(201).json(admin)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const updateAdminHandler = async (req, res) => {}

const deleteAdminHandler = async (req, res) => {}

module.exports = {
  createAdminHandler,
  getAdminHandler,
  updateAdminHandler,
  deleteAdminHandler,
}
