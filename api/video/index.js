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
    likeVideoHandler,
    dislikeVideoHandler
  } = require('./video.controller.js')
  
  const router = Router();
  
  router.post('/', createVideoHandler)
  router.get('/', getAllVideoHandler)
  router.get('/:id', getSingleVideoHandler)
  router.patch('/:id', updateVideoHandler)
  router.delete('/:id', deleteVideoHandler)
  router.get('/search', searchVideosHandler)
  router.patch('/like/:videoId', likeVideoHandler)
  router.patch('/dislike/:videoId', likeVideoHandler)
  
 module.exports = router;
