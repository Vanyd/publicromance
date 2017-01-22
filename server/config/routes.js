var passport = require('passport');


module.exports = function (app) {
    //Adding route to partials
    app.get('/partials/*', function(req,res) {
        //render out anything from the above folder.
        //When somone requests /partials, request.params will call upon item in first array and then call on the file, which is located in publicromance/public/app/*
        res.render('../../public/app/' + req.params[0]);
    });

    //Authenticate the user, by grabbing the return value
    app.post('/login', function (rep, res, next) {
        var auth = passport.authenticate('local', function(err, user){
            //if error send error
            if(err) {return next(err);}
            //if not user, send to client a JSON with false
            if(!user) {res.send ({success:false})}
            //login user
            req.logIn(user, function (err) {
                if(err) {return next(err);}
                //suscces JSON send true and the user
                res.send({success:true, user:user})
            })
        });
        auth(req, res, next);
    });

    //Create route for our application
    //Telling the server to handle all requests with a callback to render the index page.
    app.get('*', function(req, res){
        res.render('index');
    });

};