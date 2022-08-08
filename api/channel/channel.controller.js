// Controller for channel

const {
  getSingleChannel,
  createChannel,
  updateChannel,
  deleteChannel
} = require('./channel.service');

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
  getSingleChannelHandler,
  createChannelHandler,
  updateChannelHandler,
  deleteChannelHandler
}
