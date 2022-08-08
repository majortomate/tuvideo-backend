// Controller for channel

const {
  getSingleChannel,
  createChannel,
  updateChannel,
  deleteChannel,
  getAllChannel
} = require('./channel.service.js');

const getAllChannelHandler = async (req, res) => {
  try {
    const Channels = await getAllChannel();
    return res.status(200).json(Channels);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

const getSingleChannelHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const channel = await getSingleChannel(id);

    if (!channel) {
      return res.status(404).json({ message: 'Channel not found' });
    }
    return res.json(channel);

  } catch (error) {
    return res.status(500).json({ error: 'There was an error' });
  }
}

const createChannelHandler = async (req, res) => {
  const channelData = req.body;

  try {
    const channel = await createChannel(channelData);
    return res.status(201).json(channel);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

const updateChannelHandler = async (req, res) => { }

const deleteChannelHandler = async (req, res) => { }

module.exports = {
  getAllChannelHandler,
  getSingleChannelHandler,
  createChannelHandler,
  updateChannelHandler,
  deleteChannelHandler
}
