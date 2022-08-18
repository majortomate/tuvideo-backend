const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type:"string",
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  isActive:{
    type: Boolean,
    default: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  subscribedChannels:[
    {
      type:String
    }
  ]

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User
