const Video = require('./video.model.js');

//Populate sobre populate
const getAllVideo = () => Video.find({}).sort([['createdAt', -1]]).populate(["user", { path: 'comments', populate: { path: 'user' } }]);

const getSingleVideo = id => Video.findById(id).populate(["user", { path: 'comments', populate: { path: 'user' } }]);

const createVideo = video => Video.create(video);

const updateVideo = (id, dataToUpdate) => Video.findByIdAndUpdate(id, dataToUpdate, { new: true });
const deleteVideo = id => Video.findByIdAndRemove(id);

module.exports = {
  getAllVideo,
  getSingleVideo,
  createVideo,
  updateVideo,
  deleteVideo,
}
