const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");
const game = require("./game");

const app = express();
const router = express.Router();

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`/.netlify/functions/api`, router, game);

module.exports = app;
module.exports.handler = serverless(app);
