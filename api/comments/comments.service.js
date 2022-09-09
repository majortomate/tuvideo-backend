const Comment = require('./comments.model.js');

const getAllComment = () => Comment.find({}).sort([['createdAt', -1]]).populate('user');

const createComment = comment => Comment.create(comment);

const updateComment = (id, comment) => Comment.findByIdAndUpdate(id, comment, { new: true });

const deleteComment = id => Comment.findByIdAndRemove(id);

const getSingleComment = id => Comment.findById(id).populate('user');

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getSingleComment,
  getAllComment
}
