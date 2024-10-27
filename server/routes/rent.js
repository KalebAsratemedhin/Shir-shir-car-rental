const express = require('express');
const router = express.Router();
const { createRent, approveRent, confirmReturn, getCurrentUserRents, getRentRequests } = require('../controllers/rent');
const { authenticateUser } = require('../middleware/auth');

router.post('/', authenticateUser, createRent);
router.get('/current-user', authenticateUser, getCurrentUserRents);
router.get('/', authenticateUser, getRentRequests);

router.put('/:rentId/approve', authenticateUser, approveRent);
router.put('/:rentId/return', authenticateUser, confirmReturn);

module.exports = router;
 