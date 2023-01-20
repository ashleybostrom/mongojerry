const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => 
    res.status(500).send({ message: 'No route found' }));

module.exports = router;