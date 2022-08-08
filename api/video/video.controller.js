const express = require('express');
const { Router } = express;

const  {
    getAllVideo,
    createVideo,
    getSingleVideo,
    updateVideo,
    deleteVideo,
  } = require('./Video.service.js')

  
  const getAllVideoHandler = async (req, res) => {
    try {
        const Videos = await getAllVideo()
        return res.status(200).json(Video)
    } catch (error) {
        return res.status(500).json({ error })
    }
    }
  
  const getSingleVideoHandler =  async (req, res) => {
    const { id } = req.params
    try {
      const Video = await getSingleVideo(id)
  
      if (!Video) {
        return res.status(404).json({ message: 'Video not found' })
      }
      return res.json(Video)  
      
    } catch (error) {
      return res.status(500).json({ error: "There was an error"})
    }
  }
  
  const createVideoHandler = async (req, res) => {
    const VideoData = req.body
  
    try {
      const Video = await createVideo(VideoData)
      Video.save();
    } catch (error) {
      return res.status(500).json({ error: "something went wrong "})
    }
  }
  
  const updateVideoHandler = async (req, res) => {}
  
  const deleteVideoHandler = async (req, res) => {}
  
  module.exports = {
    getAllVideoHandler,
    getSingleVideoHandler,
    createVideoHandler,
    updateVideoHandler,
    deleteVideoHandler,
  }
  

