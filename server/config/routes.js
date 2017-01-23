var auth = require('./auth');

module.exports = function (app) {
    //Adding route to partials
    app.get('/partials/*', function(req,res) {
        //render out anything from the above folder.
        //When somone requests /partials, request.params will call upon item in first array and then call on the file, which is located in publicromance/public/app/*
        res.render('../../public/app/' + req.params[0]);
    });

    //route to login,
    app.post('/login', auth.authenticate);

    //route to logut
    app.post('/logout', function(req, res ) {
        //request to logout, end response
        req.logout();
        res.end();
    });

    //Create route for our application
    //Telling the server to handle all requests with a callback to render the index page.
    app.get('*', function(req, res){
        res.render('index', {
            //Bootstrap user to allow angular get current user via layout / mvIdentity
            bootstrappedUser: req.user
        });
    });

};