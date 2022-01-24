const halls = require('../database/halls');
const users = require("../database/users");

exports.getHalls = function (req, res) {
    res.send(halls);
    res.end();
}

exports.getHallByCinemaId = function (req, res) {
    const foundHall = halls.find(hall => hall.cinemaId === +req.params.id);

    res.send(foundHall);
    res.end();
}
