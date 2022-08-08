/* admin index */

const express = require('express');
const { Router } = express;

const {
  createAdminHandler,
  getAdminHandler,
  updateAdminHandler,
  deleteAdminHandler,
} = require('./admin.controller.js')

const router = Router();

router.post('/', createAdminHandler);
router.get('/:id', getAdminHandler);
router.patch('/:id',updateAdminHandler);
router.delete('/:id',deleteAdminHandler);

module.exports = router
