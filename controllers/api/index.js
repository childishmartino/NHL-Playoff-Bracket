const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bracketRoutes = require('./bracketRoutes');

router.use('/profile', userRoutes);
router.use('/bracket', bracketRoutes);

module.exports = router;
