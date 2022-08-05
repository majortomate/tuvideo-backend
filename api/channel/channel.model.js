const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
    name: {
       type: String,
       require: true,
    },
    description:{
        type: String,
        require: true,
    }, 
    banner: {
        type: String,
    },
    subscribers: {
        type: Number,
    }
},{timestamps:true});

const Channel = mongoose.model("Channel",ChannelSchema);

module.exports = ChannelSchema;
