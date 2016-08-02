var lyrics = '';

//we are sending a request for information from the server - we want to see whatever is at api/lyric//
//callback function is taking info from server and is setting it equal to the 'lyrics' variable//
$.get('/api/lyrics', function(data){
  lyrics = data;
  console.log(lyrics);

});
