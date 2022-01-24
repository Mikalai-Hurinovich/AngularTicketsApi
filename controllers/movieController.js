const movies = require('../database/movies'),
    getNextId = require('./getNextId');

let nextId = getNextId(movies);

exports.updateMovie = function (req, res) {
    const updatedMovie = req.body;

    const foundMovie = movies.find(movie => movie.id === parseInt(req.params.id));
    if (foundMovie) {
        foundMovie.title = updatedMovie.title;
    }

    res.send(foundMovie);
    res.end();
}

exports.createMovie = function (req, res) {
    const newMovie = req.body;

    newMovie.id = nextId;
    nextId++;
    movies.push(newMovie);

    res.send(newMovie);
    res.end();
}

exports.getMovie = function (req, res) {
    const foundMovie = movies.find(movie => movie.id === +req.params.id);

    res.send(foundMovie);
    res.end();
}

exports.getMovies = function (req, res) {
    res.send(movies);
    res.end();
}
