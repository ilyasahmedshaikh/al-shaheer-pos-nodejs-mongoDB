const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    cost_price: {
        type: Number,
        required: true
    },
    sell_price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true,
        min: 0
    },
    barcode: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        required: true,
        default: 'enabled'
    },
    quantity: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
});

var Products = mongoose.model('Product', productSchema);

module.exports = Products;