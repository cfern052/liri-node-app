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

}

if(call == "do-what-it-says"){

}