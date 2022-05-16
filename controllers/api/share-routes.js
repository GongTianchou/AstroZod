const router = require('express').Router();
const { Share } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const dbShareData = await Share.create({
        author: req.session.email,
        content: req.body.content
      });
      res.status(200).json(dbShareData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;