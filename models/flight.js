const mongoose = require('mongoose');

const Schema = mongoose.Schema;

	
const flightSchema = new Schema({
  airline: String,
  airport: String,
  departs: Date,
  flightNo: Number,
});

module.exports = mongoose.model('Flight', flightSchema);