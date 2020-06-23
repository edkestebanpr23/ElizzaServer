const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
    worker: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: 'Worker'
    },
    client: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: 'Client'
    },
    finalized: {
        type: Boolean,
        default: true
    },
    total: {
        type: Number,
        require: true
    },
    register: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        trim: true
    },
    products: {
        default: []
    },
    separate: {
        type: Boolean,
        default: false
    },
    payment: {
        default: []
    },
    cellar: {
        type: String,
        default: null
    }

});

module.exports = mongoose.model('Sale', SaleSchema);