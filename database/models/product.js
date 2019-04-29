const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: String,
    hash: String,
    prevHash: String,
    name: String,
    qrcode: String,
    stage: String,
    date: String,
    amount: Number,
    location: String,
    transportation: String,
    transportTo: String,
    cost: Number
})

mondule.exports = mongoose.model('Product', productSchema)


