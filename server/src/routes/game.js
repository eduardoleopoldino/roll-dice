const express = require('express');
const router = express.Router();
const game_controller = require("../controllers/game");

router.get("/game-history", game_controller.getHistory);

router.post("/roll-dice", game_controller.rollDice);

module.exports = router