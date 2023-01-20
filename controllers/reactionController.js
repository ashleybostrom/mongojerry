// import models

const { Reaction, Thought, User } = require('../models');

// import utils
module. exports = {
    // add reaction to thought
    addReaction({ params, body }, res) {
        console.log(body);
        Reaction.create(body)
            .then(({ _id }) => {
                return Thought.findOneAndUpdate(
                    { _id: params.thoughtId },
                    { $push: { reactions: _id } },
                    { new: true }
                );
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

    // remove reaction and update thought
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }
};
