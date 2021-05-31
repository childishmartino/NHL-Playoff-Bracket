const router = require('express').Router();
const { Bracket } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const bracketData = await Bracket.findAll({
        where: {
          user_id: req.session.user_id,
        }
      });

      const brackets = bracketData.map(bracket => bracket.get({ plain: true }));
  
      
  
      res.render('profile', {
        ...brackets,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
module.exports = router;