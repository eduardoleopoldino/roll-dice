const fib = require("../lib/fibonacci");
const Pusher = require('pusher');
require('dotenv').config();

// store game history in-memory
const gameLog = [];
const pusher = new Pusher({
    appId: process.env.PUSHER_APPID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
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
    }).then(
        () => {
            res.json({
                statusCode: 200,
                data,
            });
        },
        (err) => {
            res.json({
                statusCode: 500,
                message: 'Error',
                errorDetails: err
            });
        }
    );
});

const updateHistory = (data) => {
    return pusher.trigger("roll-dice", "update-history", {
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
    gameLog.unshift(record);
    
    return updateHistory(record);
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