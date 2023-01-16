const fib = require("../lib/fibonacci");

// store game history in-memory
const gameLog = [];

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

const updateScore = (data) => {
    pusher.trigger("my-channel", "my-event", {
        message: "hello world",
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
    updateScore(data);
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