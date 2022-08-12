const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
  },
  adminName:{
    name: String,
    lastName: String,
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
