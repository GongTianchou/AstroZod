// import models
const Comment = require('./comment');
const User = require('./user');
const Share = require('./share');

Share.hasMany(Comment, {
  foreignKey: 'shareid'
})
Comment.belongsTo(Share, {
  foreignKey: 'shareid',
  onDelete: 'SET NULL'
});

module.exports = {
  Comment, Share, User
};