/* admin index */

const express = require('express');
const { Router } = express;

const {
  createAdminHandler,
  getAdminHandler,
  updateAdminHandler,
  deleteAdminHandler,
  validateAdminHandler,
} = require('./admin.controller.js')

const router = Router();

router.post('/', createAdminHandler);
router.get('/:id', getAdminHandler);
router.patch('/:id',updateAdminHandler);
router.delete('/:id',deleteAdminHandler);
router.post('/signin', validateAdminHandler);

module.exports = router
