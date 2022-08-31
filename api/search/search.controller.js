const express = require('express');
const { Router } = express;

const  {
  getAllVideo,
} = require('../video/video.service.js')

const searchVideosHandler = async (req, res) =>{
  const { q } = req.query

  const Videos = await getAllVideo()

  const search = (data) => {
    return data.filter( (item) => item['title']?.toLowerCase().includes(q))
  }


  res.json(search(Videos))
}

module.exports = {
  searchVideosHandler,
}
