const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data');

// Start seeding
console.time('seeding');

// Connection to mongoDB
connection.once('open', async () => {
    
    // Wait for users and thoughts to be inserted into database
    await User.create(users);
    await Thought.create(thoughts);

    const users = userSeeds;
    const thoughts = thoughtSeeds;

    // Start seeding
    console.table(users);
    console.table(thoughts);
    console.log('\n Seeds created! \n');
    process.exit(0);
});