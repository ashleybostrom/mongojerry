//import
const { Schema, model } = require('mongoose');

// import thought model
const thoughtSchema = require('./Thought');

//create usr schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            },
        ],
        friends: []
    },
    {
        toJSON: {
            getters: true
        },
    }
);

// create user model
const User = model('user', userSchema);

// export model
module.exports = User;