const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: String,
  arrival: Date,
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: String,
  airport: String,
  departs: Date,
  flightNo: Number,
  destinations: [destinationSchema]
});



module.exports = mongoose.model('Flight', flightSchema);