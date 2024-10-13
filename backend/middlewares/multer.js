const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

// Multer Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'user_images', 
    format: async (req, file) => 'png', 
    public_id: (req, file) => Date.now().toString() + '_' + file.originalname, 
  },
});

const upload = multer({ storage });

module.exports = upload;
