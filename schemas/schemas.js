const mongoose = require('../utils/dbMongo');


const newSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    id: {
        type: String,
        unique: true
    }
});

const schema = mongoose.model('users', newSchema);

module.exports = schema;