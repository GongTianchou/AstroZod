const router = require('express').Router();
const commentRoutes = require('./comment-routes');

router.use('/comment', commentRoutes);

module.exports = router;