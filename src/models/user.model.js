const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userLastname: {
    type: String,
    required: true
  },
  userJoinDate: {
    type: Date,
    default: Date.now()
  },
  userNickname: {
    type: String,
    required: false,
    default: `${userName} ${userLastname}`
  },
  userProfilepic: {
    type: String,
    required: false,
    default: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
  },
  userPosts:{
    type: Number,
    required: true,
    default: 0
  },

})

module.exports = mongoose.model("users", userSchema)