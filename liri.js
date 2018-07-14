require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// --------liri.js take in the following commands--------

// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

// --------command prompts--------

// node liri.js my-tweets

// node liri.js spotify-this-song '<song name here>'