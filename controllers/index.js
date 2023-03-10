const express = require('express');
const router = express.Router();
const userRoutes = require('./userController');
const postRoutes = require('./postController');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
