const passport = require('passport');
const jwt = require('jsonwebtoken');
const users = require('./database/users');

exports.authenticate = function (req, res, next) {
    req.body.username = req.body.username.toLowerCase();
    const auth = passport.authenticate('local', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.sendStatus(403);
        }

        const token = jwt.sign({
            _id: user.id,
        }, 'secret', {
            expiresIn: "1d"
        })

        res.cookie('jwt', token, {
            httpOnly: true,
        })

        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }

            res.send({success: true, user, token});
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
    jwt.verify(req.body.token, 'secret', (err) => {
        if (err) {
            res.send({error: err.name, isActive: false})
            res.end();
        } else {
            res.send({isActive: true})
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
