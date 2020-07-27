const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
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
        trim: true,
        unique: true
    },
    telephone2: {
        type: String,
        trim: true
    },
    whatsapp: {
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
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Client', ClientSchema);