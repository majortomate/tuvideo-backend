const Video = require('./video.model.js');


const getAllVideo = () => Video.find({}).sort([['createdAt', -1]]);

const getSingleVideo = id => Video.findById(id).populate('user');

const createVideo = video => Video.create(video);

const updateVideo = (id, dataToUpdate) => Video.findOneAndUpdate(id, dataToUpdate, { new: true });



const deleteVideo = id => Video.findByIdAndRemove(id);

module.exports = {
  getAllVideo,
  getSingleVideo,
  createVideo,
  updateVideo,
  deleteVideo,
}
