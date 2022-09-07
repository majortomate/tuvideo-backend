const Comment = require ('./comments.model.js');

const getAllComment = () => Comment.find({}).sort([['createdAt', -1]]);

const createComment = comment => Comment.create(comment);

const updateComment = (id, comment) => Comment.findByIdAndUpdate(id, comment, { new: true });

const deleteComment = id => Comment.findByIdAndRemove(id);

const getSingleComment = id => Comment.findById(id);

module.exports ={
  createComment,
  updateComment,
  deleteComment,
  getSingleComment,
  getAllComment
}
