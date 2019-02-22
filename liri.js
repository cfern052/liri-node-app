

require("dotenv").config();
var moment = require('moment');
var spotKey = require('./keys.js');
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var call = process.argv[2];
var input = process.argv[3];


function concert() {
  axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function (response) {
      for (var i = 2; i < process.argv.length; i++)
        var artist = process.argv[i];
      console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log("\nArtist: " + artist + "\nVenue name: " + response.data[0].venue.name + "\nVenue location: " + response.data[0].venue.city + "\nDate: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
      console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~");
    })
};

function spot() {
  {
    for (var i = 2; i < process.argv.length; i++)
      var track = process.argv[i];
    spotify.search({ type: 'track', query: track }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      var song = data.tracks.items[0]
      console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log("Song: " + song.name + "\nPreview URL: " + song.preview_url + "\nArtist: " + song.artists[0].name + "\nAlbum: " + song.album.name)
      console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~");
    });
  }
}

function movie() {
  {
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
      function (response) {
        console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Movie title: " + response.data.Title + "\nRelease date: " + response.data.Released + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes: " + response.data.tomatoRating + "\nProduced in : " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors in the film: " + response.data.Actors);
        console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~");
      })
  };

}

function doIt() {
  fs.readFile("random.txt", "utf8", function (err, data, ) {

    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var dataArr = data.split(",");
    var call = dataArr[0];
    var text = dataArr[1];
    run(call, text)
  });
}

function run(call) {
  if (call == "concert-this") { concert() };
  if (call == "spotify-this-song") { spot() };
  if (call == "movie-this") { movie() };
  if (call == "do-what-it-says") { doIt() };

}
run(call);