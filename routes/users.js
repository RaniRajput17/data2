const mongoose = require("mongoose");
var plm= require("passport-local-mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/detail")
.then(function(){
  console.log("connect to db");
})

var userSchema = mongoose.Schema({
  consumerid: String,
  checkTeam: String,
  actionTaken: String,
  date: Date
})
userSchema.plugin(plm);
module.exports = mongoose.model("user" , userSchema)
