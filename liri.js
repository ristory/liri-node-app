require("dotenv").config();
//var spotify = new S potify(keys.spotify);
var request = require('request');
var moment = require('moment');
moment().format();
var a = process.argv[2];


if(a === "concert-this")
{   
    artist = process.argv[3];
    var url1 = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    request(url1, function(error, response, body){
        if(error) console.log(error);
        else var b = JSON.parse(body)[0];

    console.log("Name of the venue: " + b.venue.name);
    console.log(`Venue location: \nCountry: ${b.venue.country} \nCity: ${b.venue.city} \nRegion: ${b.venue.region}`);
    //console.log("Name of the venue " + b.venuen.name);
    });

}
else if(a === "spotify-this-song")
{

}

else if(a === "movie-this")
{

}

else if( a=== "do-what-it-says")
{

}

else
{
    console.log("Please type a right command!!!!")
}