var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
 const User = require('../model/registermodel');

 var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

	console.log(req.isAuthenticated());
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect the user to the login page
	res.sendfile('views/login.html');
}

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  
 
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'},
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));