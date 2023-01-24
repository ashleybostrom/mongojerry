const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});

    await users.forEach(user => {
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