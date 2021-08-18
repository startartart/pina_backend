module.exports = function (app) {
    var authData = {
        email: 'egoing777@gmail.com',
        password: '111111',
        nickname: 'egoing'
      };

    var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
    console.log('serializeUser',user);
    done(null, user.email);
    });

    passport.deserializeUser(function(id, done) {
    console.log('Dese',id);
    done(null, authData);
    //User.findById(id, function(err, user) {
    // done(err, user);
    //});
    });

    passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log('LocalStrategy', username, password);
        if(username === authData.email){
        console.log(1);
        if(password === authData.password){
            console.log(2);
            return done(null, authData);
        } else {
            console.log(3);
            return done(null, false, {
            message: 'Incorrect password.'
            });
        }
        }
        else {
        console.log(4);
        return done(null, false, {
            message: 'Incorrect username.'
        });
        }
        /*
        User.findOne({
        username: username
        }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {
            message: 'Incorrect username.'
            });
        }
        if (!user.validPassword(password)) {
            return done(null, false, {
            message: 'Incorrect password.'
            });
        }
        return done(null, user);
        });
        */
        
    }
    ));
    return passport;
}