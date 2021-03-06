const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.post("/scrape", (req, res)=>{
  const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
  const apiKey = "api-key=9b3adf57854f4a19b7b5782cdd6e427a"
  const queryURL = `${baseURL}?q=${req.body.topic}&sort=newest&${apiKey}`
  axios.get(queryURL).then(results=>{
    console.log("\n",);
    res.json(results.data.response.docs);
    console.log(Object.keys)
  }).catch(err=>{
    console.log(err)
  })

})
// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactscraper");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
