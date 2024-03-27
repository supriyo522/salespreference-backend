const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  date: Date,
  product: String,
  quantity: Number,
  price: Number,
});

module.exports = mongoose.model('Sale', saleSchema);
