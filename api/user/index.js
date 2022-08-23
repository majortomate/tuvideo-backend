/**
 * User API
 */
const express = require('express');
const { Router } = express;


const {
  registerUserHandler,
   resetUserPasswordHandler,
   loginUserHandler,
   updateUserHandler,
   verifyUserHandler,
 } = require('./user.controller.js')

 const router = Router();

 router.post('/register', registerUserHandler)
 router.patch('/forgot', resetUserPasswordHandler)
 router.post('/login/:id', loginUserHandler)
 router.patch('/:id', updateUserHandler)
 router.get('/verify-account/:token',verifyUserHandler)

module.exports = router;
