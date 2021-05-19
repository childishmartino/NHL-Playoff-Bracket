const User = require('./User');
const Bracket = require('./Bracket');

User.hasMany(Bracket, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bracket.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bracket };
