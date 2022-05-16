const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const shareRoutes = require('./share-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/share', shareRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
