/**
 * User API
 */
const express = require('express');
const { Router } = express;
const multer = require('multer');
const upload = multer({ dest: './TempUpload' });

const {
  getSingleUserHandler,
  updateUserHandler,
  findUserByEmailHandler,
} = require('./user.controller.js')

const router = Router();

router.get('/', findUserByEmailHandler);
router.get('/:id', getSingleUserHandler)
router.post('/:id', upload.fields([{ name: 'logo', maxCount: 1 }, { name: 'banner', maxCount: 1 }]), updateUserHandler)

module.exports = router;
