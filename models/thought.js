// inports
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

//thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


// total count
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// User model
const Thought = model('thought', thoughtSchema);

// export
module.exports = Thought;