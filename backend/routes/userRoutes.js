const express = require('express');
const { updateUser, deleteUser, getUser } = require('../controllers/userController');
const { authorizedToken } = require('../middleware/authMiddleware');


const router = express.Router();


// Get user
router.get('/find/:id', getUser)

// Update user
router.put('/find/:id', updateUser);

// Delete user
router.delete('/:id', authorizedToken, deleteUser)





module.exports = router;