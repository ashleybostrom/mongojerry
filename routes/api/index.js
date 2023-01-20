// import express and routes

const express = require('express').Router;
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// create router
Router.use('/users', userRoutes);
Router.use('/thoughts', thoughtRoutes);

// export router
module.exports = router;