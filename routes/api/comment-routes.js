const router = require('express').Router();
const { Comment, User } = require('../../models/');

router.post('/', async (req, res) => {
    // create a new category
    try {
      const dbCommentData = await Comment.create({
        author: req.body.author,
        content: req.body.content
      });
      res.status(200).json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
