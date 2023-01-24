// import express and routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// create router
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// export router
module.exports = router;