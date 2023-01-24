const router = require('express').Router();

// import thought controller
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// get all thoughts
router.route('/').get(getAllThoughts).post(createThought);

// get single thought, update thought, delete thought
router.route('/:thoughtId').get(getSingleThought).post(updateThought).delete(deleteThought);

// create reaction and delete reaction
router.route('/:thoughtId/reaction').post(createReaction).delete(deleteReaction);

// delete reaction from id
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

//export
module.exports = router;