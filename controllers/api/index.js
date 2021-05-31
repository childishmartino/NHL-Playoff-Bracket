const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bracketRoutes = require('./bracketRoutes');


router.use('/user', userRoutes);
router.use('/bracket', bracketRoutes);

module.exports = router;
