const users = require('../database/users'),
    getNextId = require('./getNextId');

let nextId = getNextId(users);

exports.updateUser = function (req, res) {
    const updatedUser = req.body;

    const foundUser = users.find(user => user.id === parseInt(req.params.id));
    if (foundUser) {
        foundUser.userName = updatedUser.userName;
    }

    res.send(foundUser);
    res.end();
}

exports.createUser = function (req, res) {
    const newUser = req.body;
    newUser.id = nextId;
    nextId++;
    users.push(newUser);

    res.send(newUser);
    res.end();
}

exports.getUser = function (req, res) {
    const foundUser = users.find(user => user.id === +req.params.id);

    res.send(foundUser);
    res.end();
}

exports.getUsers = function (req, res) {

    res.send(users);
    res.end();
}
