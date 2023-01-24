// import express and routes
const router = require('express').Router();
const apiRoutes = require('./api');

// create router
router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Error');
});

// export router
module.exports = router;