require("dotenv").config();
var moment = require('moment');
var spotKey=require('./keys.js');
moment().format();
var spotify = require('node-spotify-api');
var axios = require("axios");

var call=process.argv[2];
var input=process.argv[3];

if(call == "concert-this"){
axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
.then(function (response){
// console.log(response);
console.log("\nArtist: " + input + "\nVenue name: " + response.data.venuedata[1] + "\nVenue location: " + response.data.venuedata[3] + "\nDate: " + response.data.datetime)
})
}

if(call == "spotify-this-song"){
    spotify.search({ type: 'track', query: input }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
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

}