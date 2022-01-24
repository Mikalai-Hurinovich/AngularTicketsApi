const cinemas = require('../database/cinemas'),
    getNextId = require('./getNextId');

let nextId = getNextId(cinemas);

exports.updateCinema = function (req, res) {
    const updatedCinema = req.body;

    const foundCinema = cinemas.find(cinema => cinema.id === parseInt(req.params.id));
    if (foundCinema) {
        foundCinema.title = updatedCinema.title;
    }

    res.send(foundCinema);
    res.end();
}

exports.createCinema = function (req, res) {
    const newCinema = req.body;

    newCinema.id = nextId;
    nextId++;
    cinemas.push(newCinema);

    res.send(newCinema);
    res.end();
}

exports.getCinema = function (req, res) {
    const foundCinema = cinemas.find(cinema => cinema.id === +req.params.id);

    res.send(foundCinema);
    res.end();
}

exports.getCinemas = function (req, res) {
    res.send(cinemas);
    res.end();
}
