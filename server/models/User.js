const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    accountNumber: String,
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    profilePictureUrl: {
      type: String,
      deault: 'placeAssetHere'
    },
    email: {
      type: String,
      default: "testUser@gmail.com"
    },
    pictureHashes: Array,
    bio: String,
    dob: String,
    coverPictureUrl: String,
    verified: false
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
