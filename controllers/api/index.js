const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bracketRoutes = require('./bracketRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/bracket', bracketRoutes);

module.exports = router;
