/**
 * Created by dobyeongsu on 2015. 10. 18..
 */
var Express = require('express');
var bodyParser = require('body-parser');
var jsonWebToken = require('jsonwebtoken');
var cors = require('cors');

var composeServer = require('./composeRouter/server');
var composeClient = require('./composeRouter/client');

var app = Express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var model = require('./db');
app.get('/', function (req, res) {

});
app.use('/compose', composeServer);
app.use('/compose', composeClient);

app.post('/auth/login', function (req, res) {
    var user = req.body.user;

    try {

        var token = jsonWebToken.sign(user, 'secret', {expiresIn: "7d"});

        res.cookie('token', token, {
            expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),
            httpOnly: true
        });

        res.json({
            token: token,
            user: user,
            message: "Loggined!"
        });

    } catch (err) {

        res.json({
            message: "can't make token",
            error: err
        });

    }
});

app.listen(3001, function () {

    model.sequelize.sync().then(function() {
        console.log('Goblin Api listening');
    })
});