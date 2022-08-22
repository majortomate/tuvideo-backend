const express = require('express');
const { Router } = express;

const  {
    getAllVideo,
    createVideo,
    getSingleVideo,
    updateVideo,
    deleteVideo,
  } = require('./video.service.js')

  
  const getAllVideoHandler = async (req, res) => {

    try {
        const Videos = await getAllVideo()
        return res.status(200).json(Videos)
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

      const response = await createVideo(VideoData)

      if(response){
        res.status(200).json("success")
      } else{
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
  
  const deleteVideoHandler = async (req, res) => {}

  const searchVideosHandler = async (req, res) =>{
    res.send("hey")
    const { q } = await req.query

    const keys = ["title"]

    const search = (data) => {
      return data.filter( (item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      )
    }
     res.json(search(Videos))
  
  }
  
  module.exports = {
    getAllVideoHandler,
    getSingleVideoHandler,
    createVideoHandler,
    updateVideoHandler,
    deleteVideoHandler,
    searchVideosHandler,
  }
  

