const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/user.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', verifyToken, getAllUsers);
router.get('/:id', verifyToken, getUserById);

module.exports = router;
