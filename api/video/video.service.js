const Video = require('./video.model.js');


const getAllVideo = () => Video.find({});
  
const getSingleVideo = id => Video.findById(id);

const createVideo = video => Video.create(video);

const updateVideo = (id, dataToUpdate) => Video.findOneAndUpdate(id, dataToUpdate, { new: true });



const deleteVideo = id =>  Video.findByIdAndRemove(id);

module.exports = {
  getAllVideo,
  getSingleVideo,
  createVideo,
  updateVideo,
  deleteVideo,
}
