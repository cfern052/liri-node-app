require("dotenv").config();
var moment = require('moment');
var spotKey=require('./keys.js');
// moment().format();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
 });
var call=process.argv[2];
var input=process.argv[3];

if(call == "concert-this"){
axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
.then(function (response){
console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("\nArtist: " + input + "\nVenue name: " + response.data[0].venue.name + "\nVenue location: " + response.data[0].venue.city + "\nDate: " + moment(response.data[0].datetime).format("MM/DD/YY"));
console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~");
})
}

if(call == "spotify-this-song"){
    for (var i = 2; i < process.argv.length; i++)
    var track=process.argv[i];
    spotify.search({ type: 'track', query: track }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       var song=data.tracks.items[0]
      console.log("Song: " + song.name + "\nPreview URL: " +song.preview_url +"\nArtist: "+ song.artists[0].name + "\nAlbum: " + song.album.name) 
      });
}

if(call == "movie-this"){
    axios.get("http://www.omdbapi.com/?t="+ input +"&y=&plot=short&tomatoes=true&apikey=trilogy").then(
        function(response) {
          console.log(response);  
          console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~");  
          console.log("Movie title: " + response.data.Title + "\nRelease date: " + response.data.Released + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes: " + response.data.tomatoRating + "\nProduced in : " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors in the film: " + response.data.Actors);
          console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~");         
        })
        };
    
    

if(call == "do-what-it-says"){
File.readFile("./random.txt");
}