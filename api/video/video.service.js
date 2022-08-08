const Video = require('./video.model.js');


const getAllVideo = () => Video.find({});
  
const getSingleVideo = id => Video.findById(id);

const createVideo = video => Video.create(video);

const updateVideo = (id, video) => Video.findOneAndUpdate(id, video, { new: true });

const deleteVideo = id =>  Video.findByIdAndRemove(id);

module.exports = {
  getAllVideo,
  getSingleVideo,
  createVideo,
  updateVideo,
  deleteVideo,
}
