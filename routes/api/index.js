const router = require('express').Router();
const userRoutes = require('./users');
// const lobbyRoutes = require('./lobbies');

router.use(userRoutes);
// router.use(lobbyRoutes);

module.exports = router;
