const Flight = require('../models/flight')

module.exports = {
    create
}

function create(req, res){
Flight.findById(req.params.id, function(err, flightFromTheDatabase){
flightFromTheDatabase.destinations.push(req.body);
flightFromTheDatabase.save(function(err){
    res.redirect(`/flights/${flightFromTheDatabase._id}`)
})
})
}