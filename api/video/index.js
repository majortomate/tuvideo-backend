/**
 * User API
 */
 const express = require('express');
 const { Router } = express;
 
 
 const {
    createVideoHandler,
    getAllVideoHandler,
    deleteVideoHandler,
    getSingleVideoHandler,
    updateVideoHandler,
    searchVideosHandler,
  } = require('./video.controller.js')
  
  const router = Router();
  
  router.post('/', createVideoHandler)
  router.get('/', getAllVideoHandler)
  router.get('/:id', getSingleVideoHandler)
  router.patch('/:id', updateVideoHandler)
  router.delete('/:id', deleteVideoHandler)
  router.get('/search', searchVideosHandler)
  
 module.exports = router;
