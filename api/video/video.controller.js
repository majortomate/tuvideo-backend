const express = require('express');
const { Router } = express;

const {
  getAllVideo,
  createVideo,
  getSingleVideo,
  updateVideo,
  deleteVideo,
} = require('./video.service.js')

const {
  updateUser
} = require('../user/user.service.js')

const getAllVideoHandler = async (req, res) => {

  try {
    const Videos = await getAllVideo()
    return res.status(200).json(Videos)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const getSingleVideoHandler = async (req, res) => {
  const { id } = req.params
  try {
    const Video = await getSingleVideo(id)

    if (!Video) {
      return res.status(404).json({ message: 'Video not found' })
    }
    return res.json(Video)

  } catch (error) {
    return res.status(500).json({ error: "There was an error" })
  }
}

const createVideoHandler = async (req, res) => {
  const VideoData = req.body
  const { user } = req.body
  const response = await createVideo(VideoData)
  const addToUser = await updateUser(user, {
    $push: { video: response._id }
  })

  if (response) {
    res.status(200).json(`El canal de ${addToUser.username} a subido un nuevo video`)
  } else {
    res.status(500).json("error")
  }
}

const updateVideoHandler = async (req, res) => {
  const { id } = req.params
  const videoData = req.body


  try {
    const video = await updateVideo(id, videoData)

    return res.status(200).json(video)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const deleteVideoHandler = async (req, res) => {
  const { id } = req.params;
  const user = await updateUser()
  const response = await deleteVideo(id);

  return res.status(200).json({ message: response })
}

const searchVideosHandler = async (req, res) => {
  res.send("hey")
  const { q } = await req.query

  const keys = ["title"]

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    )
  }
  res.json(search(Videos))

}


const likeVideoHandler = async (req, res, next) => {
  const id = req.user.id;
  const {videoId} = req.params
  try {
    await Video.findByIdAndUpdate(videoId,{
      $addToSet:{likes:id},
      $pull:{dislikes:id}
    })
    res.status(200).json("The video has been liked.")
  } catch (err) {
    next(err);
  }
};

const dislikeVideoHandler = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
      await Video.findByIdAndUpdate(videoId,{
        $addToSet:{dislikes:id},
        $pull:{likes:id}
      })
      res.status(200).json("The video has been disliked.")
  } catch (err) {
    next(err);
  }
module.exports = {
  getAllVideoHandler,
  getSingleVideoHandler,
  createVideoHandler,
  updateVideoHandler,
  deleteVideoHandler,
  searchVideosHandler,
  likeVideoHandler,
  dislikeVideoHandler,
}

};
