/**
 * Created by dobyeongsu on 2016. 2. 8..
 */
var $ = require('jquery');
var fetchCurrentUser = require('./fetch.js');

$('#button').click(function() {
  fetchCurrentUser(function(user) {
    var loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');
    $('#username').text(user.fullName + ' - ' + loggedText);
  });
});
