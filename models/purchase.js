const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { number } = require('prop-types');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({

    ticketsPurchased: {
        type: Object,
        required: true

    },
    totalPurchased: {
        type: Number,
        required: false
    },
    buyer: {
        type: Object,
        required: true
    }
}, { timeStamps: true }
)

module.exports = mongoose.model('Purchases', purchaseSchema);