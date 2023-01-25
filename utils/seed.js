const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data');

// Start seeding
console.time('seeding');

// Connection to mongoDB
connection.once('open', async () => {
    
    // Wait for users and thoughts to be inserted into database
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.create(userSeeds);
    await Thought.create(thoughtSeeds);

    // const users = userSeeds;
    // const thoughts = thoughtSeeds;

    // Start seeding
    console.table(User);
    console.table(Thought);
    console.log('\n Seeds created! \n');
    process.exit(0);
});