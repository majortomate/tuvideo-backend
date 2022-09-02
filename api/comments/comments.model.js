const mongoose = require ('mongoose');

const commentSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    commentText:{
      type: String,
      require: true,
    },
  },
  { timestamps: true}
)

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment
