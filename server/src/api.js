const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");
const game_routes = require("./routes/game");

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/.netlify/functions/api', game_routes);

module.exports = app;
module.exports.handler = serverless(app);
