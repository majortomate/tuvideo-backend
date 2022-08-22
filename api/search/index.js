/**
 * User API
 */
 const express = require('express');
 const { Router } = express;
 
 
 const {
    searchVideosHandler,
  } = require('./search.controller.js')
  
  const router = Router();

  router.get('/', searchVideosHandler)
  
 module.exports = router;
