// Channel API

const express = require('express');
const { Router } = express;

const {
  getAllChannelHandler,
  getSingleChannelHandler,
  createChannelHandler,
  updateChannelHandler,
  deleteChannelHandler
} = require('./channel.controller.js');

const router = Router();

router.post('/', createChannelHandler);
router.get('/', getAllChannelHandler);
router.get('/:id', getSingleChannelHandler);
router.patch('/:id', updateChannelHandler);
router.delete('/:id', deleteChannelHandler);

module.exports = router;
