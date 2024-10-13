const User = require('../models/userModel');


const submitUser = async (req, res) => {
    try {
        const { name, socialMediaHandle } = req.body;
        const images = req.files.map(file => file.path);

        const newUser = new User({
            name,
            socialMediaHandle,
            images
        });

        await newUser.save();
        res.status(201).json({ message: 'User submission successful' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit user data' });
    }
};

// Fetch all users for the admin dashboard
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
};

module.exports = { submitUser, getAllUsers };
