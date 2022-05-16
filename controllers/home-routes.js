const router = require('express').Router();
const sequelize = require('../config/connection');
const { Share, Comment } = require('../models');

router.get('/login', (req, res) => {
    console.log(req);
    if (req.session.loggedIn) {
      res.redirect('/dashboard/');
      return;
    }
    res.render('login');
  });

router.get('/', (req, res) => {
    Share.findAll(
        {
            include:
                {
                  model: Comment,
                  attributes: ['author', 'content'],
                }
        }
    )
    .then(shareData => {
        shareList = [];
        for(var i=0; i<shareData.length; i++) {
            var newShare = {};
            newShare.author = shareData[i].author;
            newShare.content = shareData[i].content;
            newShare.id = shareData[i].id;
            newShare.comments = [];
            for (var j=0; j<shareData[i].comments.length; j++) {
                var newComment = {}
                newComment.author = shareData[i].comments[j].author;
                newComment.content = shareData[i].comments[j].content;
                newShare.comments[j] = newComment;
            }
            shareList[i] = newShare;
        }
        res.render('homepage', {shareList: shareList})
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
})
  
  module.exports = router;