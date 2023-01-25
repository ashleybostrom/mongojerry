const { User, Thought} = require('../models');

module.exports = { 
    //All thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
// single thought
getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) => !thought ? res.status(404).json({ message: 'No thoughts found' }) : res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
// create thought
createThought(req, res) {
    Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username,
    })
        .then((dbThoughtData) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            );
        })
                .then(response => {
                    if (!response) {
                        res.status(404).json({ message: 'No thought found with this id!' });
                        return;
                    }
                    res.json(response);
                })
                .catch((err) => res.status(500).json(err));
},
// update thought
updateThought(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body }
    )
        .then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        }
        )
        .catch((err) => res.status(500).json(err));
},
// delete thought
deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        }
        )
        .catch((err) => res.status(500).json(err));
},
// add reaction
createReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true },
    )
        .then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        }
        )
        .catch((err) => res.status(500).json(err));
},
// delete reaction
deleteReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.body.reactionId } } },
    )
        .then((thought) => 
            !thought 
                ? res.status(404).json({ message: 'No thought found with this id!' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
},
};
        

