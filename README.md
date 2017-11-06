# Pong Game

A pong game using SVGs built with JavaScript.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down
* f: fire the ball after goal

**Player 2:**
* ▲ : up
* ▼: down
* enter: fire the ball after goal

## Features
* Object-Oriented programming, using partials and instantiate in index.js; organized and easy to work with
* Working with SVGs including SVG tags, SVG namespace and append children of SVG tag using JavaScript
* Using webpack as bundle and production tool

## Stretch Goal Achieved
* Paddle smooth movement using keyup & keydown event listener
* Ball reset along the center of the edge of the paddle which scored
* 7 balls randomly (position & direction) generated with tripping colors upon score of 5 reached on either side
* Text animation and background color change when the above condition satisfied

## To Do (More Stretch Goals)
* Add an reset when the game ends (Sorry, there's no end of the game for now but you can press spacebar to pause)
* Animate the size of tripping balls (attempted but still no clue - the render method generates balls every ms, how to get around that and maintain the full cycle of animation?)
* Add name/rules on the html to be more user friendly

## Author
**Qingxin Yuan**

## What I Learned from the Project
The most important thing is the idea of object-oriented programming - creating classes and instantiate objects are essential to modular coding. It makes collaboration and troubleshooting easier. 

Another thing that might be worth metioning here is that I attempted the idea of animating the size of the tripping balls but got really stuck. Within the timeline of a weekend, I failed. Being able to stop and admit the fact that I would not make it happen during the weekend was actually tough to do. After figured that out, I went with a relatively easier stretch goal - making the color TRIPPING - which was also tons of fun! I guess what I learned from this is that sometimes it's okay to admit failure, don't put too much pressure on myself and be sure to ask for help after. 

Besides the above, I definitely had fun making the game! Especially the tripping-ball lightning round 

## Acknowledgement
* Thanks Mandi for walking though the OOP process and how to implement classes and objects in JS.
* Thanks Red Academy for project materials preparation