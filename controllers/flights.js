const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
    
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
    res.render('flights/index', { airline: 'All Flights', flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
    res.render('flight/show', { airline: 'Flight Detail', flight });
    });
}


function newFlight(req, res) {
    res.render('flights/new');
};

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
    
    if (err) return res.render('flights/new');
    
    res.redirect('/flights/');

})};



