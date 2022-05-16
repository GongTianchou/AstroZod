const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
      const dbCommentData = await Comment.create({
        author: req.session.email,
        content: req.body.content,
        shareid: req.body.shareId
      });
      res.status(200).json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;