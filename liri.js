require("dotenv").config();
var moment = require('moment');
moment().format();
var Spotify = require('node-spotify-api');
var axios = require("axios");

var call=process.argv[2];
var input=parseFloat(process.argv[3]);

if(call == "concert-this"){
axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
console.log("\nArtist: " + Response.name + "\nVenue name: " + Response.venue[1] + "\nVenue location: " + Response.venue[3] + "\nDate: " + response.datetime)
}

if(call == "spotify-this-song"){

}

if(call == "movie-this"){

}

if(call == "do-what-it-says"){

}