var unirest = require("unirest");

var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-videos");

req.query({
  tconst: "tt0944947",
  limit: "25",
  region: "US",
});

req.headers({
  "x-rapidapi-key": "871cd50fd5msh8bb05dff426445bp1e3322jsnb69010ff4c61",
  "x-rapidapi-host": "imdb8.p.rapidapi.com",
  useQueryString: true,
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(JSON.stringify(res.body));
});
