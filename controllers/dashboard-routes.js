const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment} = require('../models');
const horoscope = require('../utils/horoscope');
const request = require('request');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  console.log(req.body);
  User.findOne({
    where: {
      email: req.session.email
    }
  })
  .then(userData => {
    console.log('+++++++++++++++++++++' + userData.month);
    const userSign = horoscope.getUserSign(userData.month, userData.day);
    const userAnimalSign =horoscope.getUserAnimal(userData.year); 
    const prediction = {};
    prediction.userSign = userSign;
    prediction.userAnimalSign = userAnimalSign;
    var optionTomorrow = {
      url: 'https://aztro.sameerkumar.website/?sign=' + userSign + '&day=tomorrow',
      method: 'POST'
      };
    var optionToday = {
      url: 'https://aztro.sameerkumar.website/?sign=' + userSign + '&day=today',
      method: 'POST'
    };
    request(optionToday, function (error, response) {
      prediction.today = JSON.parse(response.body).description;
      request(optionTomorrow, function (error, response) {
        prediction.tomorrow = JSON.parse(response.body).description;
        res.render('dashboard', { prediction: prediction, loggedIn: true });
      })
    })
    
    // console.log(prediction.tomorrow.description);
    
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})
// get all posts for dashboard
// router.get('/', withAuth, (req, res) => {
//   console.log(req.session);
//   console.log('======================');
//   Post.findAll({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       res.render('dashboard', { posts, loggedIn: true });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });
        
//         res.render('edit-post', {
//           post,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
