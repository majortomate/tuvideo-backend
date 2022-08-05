/**
 * User API
 */
const express = require('express');
 const { Router } = express;


const {
   createUserHandler,
   deleteUserHandler,
   getSingleUserHandler,
   updateUserHandler,
 } = './user.controller.js'
 
 const router = Router();
 
 router.post('/', createUserHandler)
 router.get('/:id', getSingleUserHandler)
 router.patch('/:id', updateUserHandler)
 router.delete('/:id', deleteUserHandler)
 
module.exports = router;
