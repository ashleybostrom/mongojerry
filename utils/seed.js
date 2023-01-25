const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data');

connection.on('error', (err) => err);

// Connection to mongoDB
connection.once('open', async () => {
    console.log('connected');
    
    const users = userSeeds;
    const thoughts = thoughtSeeds;

    // Wait for users and thoughts to be inserted into database
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    // Start seeding
    console.log('\n Seeds created! \n');
    process.exit(0);
});