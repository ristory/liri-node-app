require("dotenv").config();
//var spotify = new S potify(keys.spotify);
var request = require('request');
var moment = require('moment');
import imdb = require('imdb');
moment().format();
var a = process.argv[2];
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "8f2c9113a2b14cecadf984c45db2756c",
  secret: "0877aee02b9a4ac5a8d81ab6b33a7f1f"
});

if(a === "concert-this")
{   
    var artist = process.argv[3];
    var url1 = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    request(url1, function(error, response, body){
        if(error) console.log(error);
        else var b = JSON.parse(body)[0];

    console.log("Name of the venue: " + b.venue.name);
    console.log(`Venue location: \nCountry: ${b.venue.country} \nCity: ${b.venue.city} \nRegion: ${b.venue.region}`);
    console.log("Date of event: " + moment(b.datetime).format('MM/DD/YYYY'));
    });

}
else if(a === "spotify-this-song")
{
    var c = process.argv[3]
    if(!c)
    {
        c = "The Sign";
    }
    else{}
    spotify.search({ type: 'track', query: c }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log("Artist: " + data.tracks.items[0].album.artists[0].name); 
      console.log("Name: " + c); 
      console.log("URL Spotify: " + data.tracks.items[0].album.external_urls.spotify); 
      console.log("Album: " + data.tracks.items[0].album.name); 
      });
}

else if(a === "movie-this")
{
    var movie = process.argv[3];
    if(!movie)
    {
        movie = "Mr. Nobody"
    }
    else{}
    imdb.get({name: movie}, {apiKey: 'trilogy', timeout: 30000})
    .then(console.log)
    .catch(console.log);
}

else if( a=== "do-what-it-says")
{

}

else
{
    console.log("Please type a right command!!!!")
}