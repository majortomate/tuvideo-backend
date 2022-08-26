const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  logo: {
    type: String,
  },
  banner: {
    type: String,
  },
  description: {
    type: String,
  },
  subscribers: {
    type: Number,
    default: 0
  },
  video: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  }],
  passwordResetToken: String,
  passwordResetExpires: Date,
  subscribedChannels: [
    {
      type: String
    }
  ]

}, { timestamps: true });

UserSchema.virtual('profile').get(function profile() {
  const {
    username, email, role,
  } = this;

  return {
    username,
    email,
    role,
  };
});

const User = mongoose.model("User", UserSchema);

module.exports = User
