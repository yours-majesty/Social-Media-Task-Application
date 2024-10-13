const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  socialMediaHandle: { type: String, required: true },
  images: [{ type: String, required: true }], 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
