/**
 * Created by dobyeongsu on 2015. 10. 18..
 */
import Express from 'express';
import bodyParser from 'body-parser';
import jsonWebToken from 'jsonwebtoken';

var app = Express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/auth/login', (req, res) => {

    let user = req.body.user;
    let token = jsonWebToken.sign(user, 'secret', {expiresIn : "7d"});

    res.json(200, { token: token });

});

app.listen(3001, function () {
    console.log('Goblin Api listening');
});