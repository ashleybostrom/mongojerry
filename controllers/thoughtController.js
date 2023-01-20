const { User, Thought} = require('../models');

module.exports = { 
    //All thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thught))
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
    Thought.create(req.body)
        .then((thought) => {
            User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            )
                .then((user) => {
                    if (!user) {
                        res.status(404).json({ message: 'No user found with this id!' });
                        return;
                    }
                    res.json(user);
                })
                .catch((err) => res.json(err));
        }
        )
        .catch((err) => res.status(500).json(err));
},
// update thought
updateThought(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
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
        { runValidators: true, new: true }
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
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
    )
        .then((thought) => 
            !thought 
                ? res.status(404).json({ message: 'No thought found with this id!' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
},
};
        

