const router = require('express').Router();
const { Bracket } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const bracketData = await Bracket.findAll({
      where: {
        user_id: req.session.user_id,
      }
    });

    const brackets = bracketData.get({ plain: true });

    res.render('profile', {
      ...brackets,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newBracket = await Bracket.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBracket);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bracketData = await Bracket.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bracketData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(bracketData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
