// Connect to mongoose

const { connect, connection } = require('mongoose');

// Connect to MongoDB Atlas for Heroku App or run local

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-db-name';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Export
module.exports = connection;
