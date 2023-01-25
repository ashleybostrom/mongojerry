// Connect to mongoose

const { connect, connection } = require('mongoose');

// Connect to MongoDB
connect('mongodb://localhost:27017/your-db-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Export
module.exports = connection;
