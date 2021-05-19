const sequelize = require('../config/connection');
const { User, Bracket } = require('../models');

const userData = require('./userData.json');
const bracketData = require('./bracketData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const bracket of bracketData) {
    await Bracket.create({
      ...bracket,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
