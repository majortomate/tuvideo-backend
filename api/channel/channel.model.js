const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  logo: {
    type: String,
  },
  banner: {
    type: String,
  },
  description: {
    type: String,
    require: true,
  },
  subscribers: {
    type: Number,
  },
  date: {
    type: Date,
  }
}, { timestamps: true });

const Channel = mongoose.model("Channel", ChannelSchema);

module.exports = Channel;
