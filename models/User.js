const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    register: {
        type: Date,
        default: Date.now()
    },
    telephone: {
        type: String,
        require: true,
        trim: true
    },
    telephone2: {
        type: String,
        trim: true
    },
    sex: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    worker: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: 'Worker'
    }
});

module.exports = mongoose.model('User', UserSchema);