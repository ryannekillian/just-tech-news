//this file wll serve as a means to collect all of the api routes and package them up for us

const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;