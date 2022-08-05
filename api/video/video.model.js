const mongoose = require ('mongoose') 


const VideoSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true,
    },
    thumbnail: {
        type: String
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        require: true
    },
    tags: {
        type: String,
    },
    likes: {
        type: Number,
    },
    comments: {
        type: String,
    },
    
},{timestamps: true})

const Video = mongoose.model('Video', VideoSchema)

module.exports = VideoSchema
