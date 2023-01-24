const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

const { route } = require('./userRoutes');

// get all thoughts and create thought
router.route('/').get(getAllThoughts).post(createThought);

// get single thought, update thought, delete thought
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);

// create reaction and delete reaction
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

//export
module.exports = router;