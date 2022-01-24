const sessions = require('../database/sessions');

exports.getSessions = function (req, res) {
    res.send(sessions);
    res.end();
}

exports.getSessionsById = function (req, res) {
    const foundSessions = sessions.filter((session) => {
        return session[req.params.key].id === Number(req.params.id)
    });
    res.send(foundSessions);
    res.end();
}
