const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  users = require('./database/users');
  
  
module.exports = function() {
  passport.use(new LocalStrategy(
    function(userName, userPassword, done) {
      const found = users.find(user => {
        return user.userName.toLowerCase() === userName && user.userPassword === userPassword;
      })
      if(found) {
        return done(null, found);  
      } else {
        return done(null, false);
      }
      
    }
  ));

  passport.serializeUser(function(user, done) {
    if(user) {
      done(null, user.id);
    }
  });

  passport.deserializeUser(function(id, done) {
    const found = users.find(user => {
      return user.id === id;
    })
    if(found) {
      return done(null, found);  
    } else {
      return done(null, false);
    }
  })
}
