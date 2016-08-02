//BACK-END CODE HERE ---> PUBLIC FOLDER HOLDS FRONT-END CODE//

var ex = require('./lyrics.js');
var express = require('express');
var app = express();


//static files are being held in a public directory, so go there.
app.use(express.static(__dirname + '/public'));
//get the port, OR 5000
app.set('port', (process.env.PORT || 5000));

// var lyrics = ['song lyrics', 'singing song', 'this is a song'];


//server only responds to requests - when we receive a request to the end point '/' send back a selection of lyrics
// app.get('/', function(request, response){
//   res.send(lyrics[selection]);
// })

// app.get('/api/lyrics', function (req, res) {
//   var selection = Math.floor(Math.random()*lyrics.length);
//   res.send(ex[selection]); /* string from array is going to be the response */
// });

app.get('/api/lyrics', function (req, res){
  var selection = Math.floor(Math.random()*ex.length);
  res.send(ex[selection]);
});


var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Example app listening on port 3000!', app.get('port'));
});
