const {getCurrentUser} = require('../controllers/user')
const {authenticateUser} = require('../middleware/auth')

const express = require('express');
const router = express.Router();
 

router.get('/current-user', authenticateUser, getCurrentUser)

// router.put('/', updateUser )

module.exports = router