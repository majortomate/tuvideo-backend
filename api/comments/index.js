const express = require('express');
const { createCommentHandler } = require('./comments.controller');
const { Router } = express;

const router = Router();

router.post('/:id', createCommentHandler);
// router.put('/:id',updateCommentHandler);
// router.delete('/:id', deleteCommentHandler);
// router.get('/:commentId', getCommentsHandler);

module.exports = router;
