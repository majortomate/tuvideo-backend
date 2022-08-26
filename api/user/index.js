/**
 * User API
 */
const express = require('express');
const { Router } = express;


const {
  getSingleUserHandler,
  updateUserHandler,
  findUserByEmailHandler,
} = require('./user.controller.js')

const router = Router();

router.get('/', findUserByEmailHandler);
router.get('/:id', getSingleUserHandler)
router.patch('/:id', updateUserHandler)

module.exports = router;
