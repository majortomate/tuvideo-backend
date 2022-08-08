// Channel API

const express = require('express');
const { Router } = express;

const {
  getSingleChannelHandler,
  createChannelHandler,
  updateChannelHandler,
  deleteChannelHandler
} = require('./channel.controller');

const router = Router();

router.post('/', createChannelHandler);
router.get('/:id', getSingleChannelHandler);
router.patch('/:id', updateChannel);
router.delete('/:id', deleteChannel);

module.exports = router;
