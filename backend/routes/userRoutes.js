const express = require('express');
const upload = require('../middlewares/multer');
const { submitUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();


router.post('/submit', upload.array('images', 5), submitUser); 

// Route to get all users for the  dashboard
router.get('/users', getAllUsers);

module.exports = router;
