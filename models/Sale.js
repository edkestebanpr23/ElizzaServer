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
        require: true
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
        type: Array,
        default: [],
    },
    credit: {
        type: Boolean,
        require: true
    },
    payments: {
        type: Array,
        default: []
    },
    cellar: {
        type: String,
        default: null
    }

});

module.exports = mongoose.model('Sale', SaleSchema);