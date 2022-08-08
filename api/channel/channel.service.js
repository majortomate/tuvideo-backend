const Channel = require('./channel.model');

const getSingleChannel = id => Channel.findById(id);

const findChannelByName = name => Channel.findOne({ name });

const createChannel = channel => Channel.create(channel);

const updateChannel = (id, channel) => Channel.findByIdAndUpdate(id, channel, { new: true });

const deleteChannel = id => Channel.findByIdAndRemove(id);

module.exports = {
  getSingleChannel,
  findChannelByName,
  createChannel,
  updateChannel,
  deleteChannel
}
