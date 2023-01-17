# ROLL DICE

This game is a coding challenge with the following requirements.

## Requirements
1. A REST API to fetch n-th number in the Fibonacci sequence;
2. The users should see what numbers were previously requested;
3. The public history should be visible to any user opening the web-frontend;

## Decisions
- So istead of just creating a simple page to input a number and return the value, I wanted to make something fun, so I decided to create a simple dice game, where given the result of the dices, the score will be calculated using the fibonacci sequence.

- First challenge was to host the app somewhere where I could run both the frontend and the backend. The chosen one was [Netlify](https://www.netlify.com/)

- The user should first enter a name in order to play and the score is updated in realtime using [Pusher](https://pusher.com/). Initially, the idea was to use websockets, but since netlify doesn´t support it.

- The dice animation was copied from [here](https://codesandbox.io/s/xjk3xqnprw)

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