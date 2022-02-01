const passport = require('passport');
const jwt = require('jsonwebtoken');
const users = require('./database/users');
const localStrategy = require('passport-local');

exports.authenticate = function (req, res, next) {
    req.body.username = req.body.userName.toLowerCase();
    const auth = passport.authenticate('local', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.sendStatus(403);
        }

        const token = jwt.sign({
            _id: user.id,
            isAdmin: user.isAdmin
        }, 'secret', {
            expiresIn: "1d"
        })

            req.logIn(user, function (err) {
                if (err) {
                    res.status(403).send('Something go wrong...');
                    res.end();
                } else {
                    res.cookie('jwt', token, {
                        httpOnly: true,
                    })

                    const {userPassword, ...data} = user;
                    res.send({success: true, user: data, token});
                }
            })
    })

    auth(req, res, next);
};

exports.getCurrentIdentity = function (req, res) {
    const cookie = req.cookies['jwt'];

    jwt.verify(cookie, 'secret', (err, decoded) => {
        if (err) {

            res.send(err);
            res.end();
        } else {
            const user = users.find(u => u.id === decoded._id);
            res.status(200).send(user);
            res.end();
        }
    });
}

exports.logOut = function (req, res) {
    req.logout();
    res.end();
}

exports.isTokenActive = function (req, res) {
    jwt.verify(req.headers.token, 'secret', (err) => {
        if (err) {
            res.send(false)
            res.end();
        } else {
            res.send(true)
            res.end();
        }
    })
}

exports.isAdmin = function (req, res) {
    jwt.verify(req.headers.token, 'secret', (err, decoded) => {
        if (decoded && decoded.isAdmin) {
            res.send(true)
            res.end();
        } else {
            res.send(false)
            res.end();
        }
    })
}

exports.requiresApiLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        res.status(403);
        res.end();
    } else {
        next();
    }
};

exports.requiresRole = function (role) {
    return function (req, res, next) {
        if (!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
            res.status(403);
            res.end();
        } else {
            next();
        }
    }
}
