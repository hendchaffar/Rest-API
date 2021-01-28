const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        unique: true
    }
})

module.exports = User = mongoose.model('Users', UserSchema);