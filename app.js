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

//respond to a request at this end point (api/lyrics) when a request is made to api/lyrics we're going to respond by running this callback function
//we have control over the response here, NOT the request
app.get('/api/lyrics', function (request, response){
  var selection = Math.floor(Math.random()*ex.length);
  res.send(ex[selection]);
});

//app.listen method takes the port we want to listen on and a function to run once you start the server
//set to server variable to use

app.listen(app.get('port'), function () {
  // var port = server.address().port;
  console.log('Example app listening on port 3000!', app.get('port'));
});
