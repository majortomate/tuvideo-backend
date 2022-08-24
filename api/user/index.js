/**
 * User API
 */
const express = require('express');
const { Router } = express;


const {
  getSingleUserHandler,
  registerUserHandler,
  resetUserPasswordHandler,
  loginUserHandler,
  updateUserHandler,
  verifyUserHandler,
  findUserByEmailHandler,
} = require('./user.controller.js')

const router = Router();

router.get('/', findUserByEmailHandler);
router.get('/:id', getSingleUserHandler)
router.post('/register', registerUserHandler)
router.patch('/forgot', resetUserPasswordHandler)
router.post('/login', loginUserHandler)
router.patch('/:id', updateUserHandler)
router.get('/verify-account/:token', verifyUserHandler)

module.exports = router;
