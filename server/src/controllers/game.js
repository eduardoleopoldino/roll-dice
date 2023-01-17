const fib = require("../lib/fibonacci");
const Pusher = require('pusher');

// store game history in-memory
const gameLog = [];
const pusher = new Pusher({
    appId: "1539175",
    key: "0f13f9521d4247a69f3d",
    secret: "c8125996bf20aee6d50d",
    cluster: "eu",
  });

const getHistory = ((req, res) => {
    res.json({
        statusCode: 200,
        data: gameLog
    });
});

const rollDice = ((req, res) => {
    const dice1 = getRandomNumber(1, 6);
    const dice2 = getRandomNumber(1, 6);
    const score = fib(dice1 + dice2);

    const data = {
        dice1,
        dice2,
        score,
    };

    addHistory({
        user: req.body.user,
        ...data
    });

    res.json({
        statusCode: 200,
        data
    });
});

const updateHistory = (data) => {
    pusher.trigger("roll-dice", "update-history", {
        data
    });
}

const addHistory = (data) => {
    console.log(data);
    
    const record = {
        user: data.user,
        roll: data.dice1 + data.dice2,
        score: data.score,
        date: Date.now()
    };
    gameLog.push(record);
    updateHistory(record);
}

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    getHistory,
    rollDice,
}