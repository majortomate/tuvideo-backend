const moongose = require('mongoose')

const RoleSchema = new moongose.Schema({
  rolName:{
    type: String,
    default: 'subscriber'
  }
}, {timestamps: true})

const Role =mongoose.model("Admin", RoleSchema);


module.exports = Role;

