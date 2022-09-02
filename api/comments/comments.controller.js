const {
  createComment,
} = require('./comments.service')

const { updateVideo } = require('../video/video.service.js')

const createCommentHandler = async (req, res) => {
  const commentData = req.body
  const { id } = req.params
  const response = await createComment(commentData)
  const addToVideo = await updateVideo(id, {
    $push: { comments: response._id }
  })
  console.log(addToVideo)
  if (response) {
    res.status(200).json('comment created')
  } else {
    res.status(500).json("error not comment created")
  }
}

// export const updateCommentHandler = async (req, res) => {

// }

// export const deleteCommentHandler = async (req, res) => {
//   try {
//   } catch (error) {
//     next(error)
//   }
// }


module.exports = {
  createCommentHandler
}
