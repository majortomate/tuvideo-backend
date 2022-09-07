const express = require('express');
const { createCommentHandler, getAllCommentsHandler } = require('./comments.controller');
const { Router } = express;

const router = Router();

router.post('/:id', createCommentHandler);
router.get('/', getAllCommentsHandler)
// router.put('/:id',updateCommentHandler);
// router.delete('/:id', deleteCommentHandler);
// router.get('/:commentId', getCommentsHandler);

module.exports = router;
