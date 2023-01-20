const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { users, thoughts, reactions, getRandom01, getRandomItem, getRandomNumber } = require('./data');
const { ObjectId } = require('mongoose').Types;
connection.on('error', (err) => err);

connection.once('open', async () => {
    console.info('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});

    await user.forEach(user => {
        User.create({
            username: user,
            email: `${user}@place.com`,
            thoughts: [],
        });
    });

    let userCount = await User.find({}).exec();

    console.log("Count :", userCount);
   


    process.exit(0);
});