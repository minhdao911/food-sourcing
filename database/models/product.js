const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    qrcode: String,
    stage: String,
    date: String,
    amount: Number,
    location: String,
    transportFrom: String,
    transportTo: String,
    cost: String,
    hash: String,
    prevHash: String
})

module.exports = mongoose.model('Product', productSchema)


