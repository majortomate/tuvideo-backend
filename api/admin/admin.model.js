const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true,
  },
  adminName:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  isLogged:{
    type: Boolean,
  },
},{ timestamps: true });

const Admin =mongoose.model("Admin", AdminSchema);

module.exports = Admin
