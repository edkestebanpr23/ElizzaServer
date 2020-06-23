const mongoose = require('mongoose');

const WorkerSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    document: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    img: {
        type: String,
        default: ''
    },
    password: {
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
    active: {
        type: Boolean,
        default: true
    },
    rol: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Worker', WorkerSchema);