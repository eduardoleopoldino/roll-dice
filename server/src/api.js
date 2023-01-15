const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello default ${Math.floor(Math.random() * 10)}`
    })
  });
});

router.get("/test", (req, res) => {
  res.json({
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello world ${Math.floor(Math.random() * 10)}`
    })
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
