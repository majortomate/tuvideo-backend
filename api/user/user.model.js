const mongoose = require('mongoose')

const Payment = new mongoose.Schema({
  customerId: String,
  cards: [
    {
      paymentMethodId: String,
      brand: String,
      country: String,
      expMonth: Number,
      expYear: Number,
      funding: String,
      last4: String,
    },
  ],
});

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
  /*   playlist: [
      {
        name: {
          type: string,
          required: true
        },
        videos: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
          }
        ]
      }
    ], */
  passwordResetToken: String,
  passwordResetExpires: Date,
  subscribedChannels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true
    }
  ],
  payment: Payment,
}, { timestamps: true });

UserSchema.virtual('profile').get(function profile() {
  const {
    _id, username, email, role, logo
  } = this;

  return {
    _id,
    username,
    email,
    role,
    logo
  };
});

const User = mongoose.model("User", UserSchema);

module.exports = User
