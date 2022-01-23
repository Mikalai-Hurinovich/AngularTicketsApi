const auth = require('./auth'),
  users = require('./controllers/userController');
  path = require('path');

const fs = require('fs');


module.exports = function(app) {

  app.post('/api/login', auth.authenticate);
  app.get('/api/currentIdentity', auth.getCurrentIdentity);
  app.put('/api/users/:id', users.updateUser);
  app.get('/api/user/:id', users.getUser);
  app.get('/api/users', users.getUsers);
  
  app.post('/api/logout', function(req, res) {
    req.logout();
    res.end();
  });
  
  app.get('/app/*', function(req, res) {
    res.sendStatus(404);
  });
  
  app.get('/node_modules/*', function(req, res) {
    res.sendStatus(404);
  });

  app.get('/user/*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
  });
  app.get('/404', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
  });
  app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
  });
  
  app.get('*', function(req, res) {
    console.log('404 error', req.path);
    res.sendStatus(404);
  });
}
