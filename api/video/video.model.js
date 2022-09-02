const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true,
  },
  thumbnail: {
    type: String
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: [String],
    default: []
  },
  dislikes: {
    type: [String],
    default: []
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      unique: true
    }
  ]
}, { timestamps: true });

const Video = mongoose.model('Video', VideoSchema)

module.exports = Video
