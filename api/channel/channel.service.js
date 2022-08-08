const Channel = require('./channel.model.js');

const getAllChannel = () => Channel.find({});

const getSingleChannel = id => Channel.findById(id);

const findChannelByName = name => Channel.findOne({ name });

const createChannel = channel => Channel.create(channel);

const updateChannel = (id, channel) => Channel.findByIdAndUpdate(id, channel, { new: true });

const deleteChannel = id => Channel.findByIdAndRemove(id);

module.exports = {
  getAllChannel,
  getSingleChannel,
  findChannelByName,
  createChannel,
  updateChannel,
  deleteChannel
}
