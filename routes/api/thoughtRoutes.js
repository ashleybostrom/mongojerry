const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts get and post
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:id get one thought put and delete
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions post and delete
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

//export
module.exports = router;