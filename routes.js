const auth = require('./auth'),
    users = require('./controllers/userController'),
    cinemas = require('./controllers/cinemaController'),
    sessions = require('./controllers/sessionController'),
    halls = require('./controllers/hallController'),
    movies = require('./controllers/movieController');
path = require('path');

const fs = require('fs');


module.exports = function (app) {
    app.post('/api/login', auth.authenticate);
    app.post('/api/logout', auth.logOut);
    app.get('/api/currentIdentity', auth.getCurrentIdentity);
    app.get('/api/token', auth.isTokenActive);
    app.get('/api/admin', auth.isAdmin);
    app.get('/api/users', users.getUsers);
    app.post('/api/register', users.createUser);
    app.put('/api/users/:id', users.updateUser);
    app.get('/api/user/:id', users.getUser);

    app.get('/api/cinemas', cinemas.getCinemas)
    app.get('/api/cinemas/:id', cinemas.getCinema)
    app.post('/api/cinemas/new', cinemas.createCinema)

    app.get('/api/movies', movies.getMovies)
    app.get('/api/movies/:id', movies.getMovie)
    app.post('/api/movies/new', movies.createMovie)

    app.get('/api/sessions', sessions.getSessions)
    app.get('/api/sessions/:key/:id', sessions.getSessionsById)

    app.get('/api/halls', halls.getHalls)
    app.get('/api/halls/:id', halls.getHallByCinemaId)


    app.get('/app/*', function (req, res) {
        res.sendStatus(404);
    });

    app.get('/node_modules/*', function (req, res) {
        res.sendStatus(404);
    });

    app.get('/user/*', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
    });
    app.get('/404', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
    });
    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
    });

    app.get('*', function (req, res) {
        console.log('404 error', req.path);
        res.sendStatus(404);
    });
}
