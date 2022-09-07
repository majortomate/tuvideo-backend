const {
  createComment,
  getAllComment
} = require('./comments.service')

const { updateVideo } = require('../video/video.service.js')

const createCommentHandler = async (req, res) => {
  const commentData = req.body
  console.log(commentData)
  const { id } = req.params
  const response = await createComment(commentData)

  const addToVideo = await updateVideo(id, {
    $push: { comments: response._id }
  })
  if (response) {
    res.status(200).json('comment created')
  } else {
    res.status(500).json("error not comment created")
  }
}

const getAllCommentsHandler = async (req, res) =>{
  try {
    const Comments = await getAllComment()
    return res.status(200).json(Comments)
  } catch (error) {
    return res.status(500).json({ error })
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
  createCommentHandler,
  getAllCommentsHandler
}
