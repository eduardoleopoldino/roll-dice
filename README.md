# ROLL DICE
[![Netlify Status](https://api.netlify.com/api/v1/badges/bea08b53-80f0-4248-b527-89309609d5a7/deploy-status)](https://app.netlify.com/sites/roll-dice-demo/deploys)

This game is a coding challenge with the following requirements.

## Requirements
1. A REST API to fetch n-th number in the Fibonacci sequence;
2. The users should see what numbers were previously requested;
3. The public history should be visible to any user opening the web-frontend;

- Istead of just creating a simple page to input a number and return the value, I wanted to make something fun. So, I created a simple dice game, where given the sum of the dices, the score will be calculated using the fibonacci sequence.

## Decisions

- First challenge was to host the app somewhere where I could run the project. The chosen one was [Netlify](https://www.netlify.com/).

- The user should first enter a name before start the game.

- The score is updated in realtime using [Pusher](https://pusher.com/) service. Initially, the idea was to use a websockets library, but, netlify functions doesn´t support it due to the serverless architecture.

- The dice animation was taken from [here](https://codesandbox.io/s/xjk3xqnprw)

- And for the fibonacci (recursive) method, I added a memoized function to cache the results, to improve a litle bit the performance.

## Build and run locally

1. Install dependencies
npm install --prefix server && npm install --prefix client

2. Run - Open two terminals
npm run serve:server
npm run serve:client

3. Visit: http://localhost:4200

## Online demo
Visit and give it a try @ https://roll-dice-demo.netlify.app/