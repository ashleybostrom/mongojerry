//import
const { Schema, model } = require('mongoose');

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
            required: true,
            validator: (value) => {
                return validator.isEmail(value);
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//total count of friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create user model
const User = model('User', userSchema);

// export model
module.exports = User;