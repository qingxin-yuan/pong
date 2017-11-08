/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

var boardGap = exports.boardGap = 10;
var paddleWidth = exports.paddleWidth = 8;
var paddleHeight = exports.paddleHeight = 56;
var paddleSpeed = exports.paddleSpeed = 5;
var ballRadius = exports.ballRadius = 8;

var KEYS = exports.KEYS = {
  a: 'a', // player 1 up key
  z: 'z', // player 1 down key
  f: 'f', // player 1 fire shot key
  up: 'ArrowUp', // player 2 up key
  down: 'ArrowDown', // player 2 down key
  enter: 'Enter', //player 2 fire shot key
  spaceBar: ' ' // we'll use this later...
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

var _Board = __webpack_require__(6);

var _Board2 = _interopRequireDefault(_Board);

var _Paddle = __webpack_require__(7);

var _Paddle2 = _interopRequireDefault(_Paddle);

var _Ball = __webpack_require__(5);

var _Ball2 = _interopRequireDefault(_Ball);

var _Score = __webpack_require__(8);

var _Score2 = _interopRequireDefault(_Score);

var _TrippingBall = __webpack_require__(9);

var _TrippingBall2 = _interopRequireDefault(_TrippingBall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game(element, width, height) {
		var _this = this;

		_classCallCheck(this, Game);

		this.element = element;
		this.width = width;
		this.height = height;
		this.boardGap = _settings.boardGap;
		this.paddleWidth = _settings.paddleWidth;
		this.paddleHeight = _settings.paddleHeight;
		this.ballRadius = _settings.ballRadius;
		this.pause = 0;

		//GRAB THE #GAME ELEMENT IN HTML
		this.gameElement = document.getElementById(this.element);

		//INSTANTIATE OBJECTS FROM EACH CLASS ACCORDINGLY
		this.board = new _Board2.default(this.width, this.height);

		this.ball = new _Ball2.default(this.ballRadius, this.width, this.height);

		this.trippingball1 = new _TrippingBall2.default(this.ballRadius * 2, this.width, this.height);
		this.trippingball2 = new _TrippingBall2.default(this.ballRadius * 0.7, this.width, this.height);
		this.trippingball3 = new _TrippingBall2.default(this.ballRadius * 1.2, this.width, this.height);
		this.trippingball4 = new _TrippingBall2.default(this.ballRadius * 2.5, this.width, this.height);
		this.trippingball5 = new _TrippingBall2.default(this.ballRadius, this.width, this.height);
		this.trippingball6 = new _TrippingBall2.default(this.ballRadius * 3, this.width, this.height);
		this.trippingball7 = new _TrippingBall2.default(this.ballRadius * 3.5, this.width, this.height);

		this.paddleOne = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.a, _settings.KEYS.z, _settings.KEYS.f);

		this.paddleTwo = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.width - this.boardGap - this.paddleWidth, (this.height - this.paddleHeight) / 2, _settings.KEYS.up, _settings.KEYS.down, _settings.KEYS.enter);

		this.scoreOne = new _Score2.default(this.width / 2 - 20, 30, 30, 'end');
		this.scoreTwo = new _Score2.default(this.width / 2 + 20, 30, 30, 'start');

		//ADD EVENTLISTENER FOR PAUSING THE GAME USING SPACE BAR
		document.addEventListener('keydown', function (event) {
			if (event.key === _settings.KEYS.spaceBar) {
				_this.pause = !_this.pause;
			}
		});
	}

	_createClass(Game, [{
		key: 'render',
		value: function render() {
			if (this.pause) {
				return;
			}

			this.gameElement.innerHTML = '';

			var svg = document.createElementNS(_settings.SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewbox', '0 0 ' + this.width + ' ' + this.height);
			svg.setAttributeNS(null, 'version', '1.1');

			this.gameElement.appendChild(svg);

			this.board.render(svg);

			this.paddleOne.render(svg);
			this.paddleTwo.render(svg);

			//AFTER EITHER GOAL REACHES 5, 7 TRIPPING BALLS ARE TRIGGERED, APPEARING RANDOMLY ON THE GAME BOARD
			if (this.paddleOne.score < 5 && this.paddleTwo.score < 5) {
				this.ball.render(svg, this.paddleOne, this.paddleTwo);
			} else {
				this.trippingball1.render(svg, this.paddleOne, this.paddleTwo);
				this.trippingball2.render(svg, this.paddleOne, this.paddleTwo);
				this.trippingball3.render(svg, this.paddleOne, this.paddleTwo);
				this.trippingball4.render(svg, this.paddleOne, this.paddleTwo);
				this.trippingball5.render(svg, this.paddleOne, this.paddleTwo);
				this.trippingball6.render(svg, this.paddleOne, this.paddleTwo);
				this.trippingball7.render(svg, this.paddleOne, this.paddleTwo);

				//ANIMATE TEXT AND CHANGE BACKGROUND COLOR WHEN TRIPPING BALLS ARE TRIGGERED
				document.getElementsByClassName('text')[0].setAttribute('id', 'text');
				document.querySelector('body').setAttribute('style', 'background: #6b8e23');
			}

			this.scoreOne.render(svg, this.paddleOne.score);
			this.scoreTwo.render(svg, this.paddleTwo.score);
		}
	}]);

	return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(15)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./game.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./game.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a game instance
var game = new _Game2.default('game', 512, 256);

(function gameLoop() {
    //infinite gameloop
    game.render();
    requestAnimationFrame(gameLoop);
})();

var music = new Audio('public/sounds/the-warden-maceo-plex-clipped.mp3');
music.play();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(radius, boardWidth, boardHeight) {
    _classCallCheck(this, Ball);

    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-03.wav');
    this.pong = new Audio('public/sounds/pong-04.wav');

    this.reset();
  }

  _createClass(Ball, [{
    key: 'reset',
    value: function reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;

      //GENERATE RANDOM SPEED FOR THE BALL - VX & VY
      //vy random number b/w (-5, 5)
      this.vy = 0;
      while (this.vy === 0) {
        this.vy = Math.floor(Math.random() * 10 - 5);
      }
      //set vx accordingly, use 6 to avoide vx being 0
      this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    //METHOD TO RESET THE BALL AT WINNER'S SIDE OF THE PADDLE

  }, {
    key: 'resetAfterGoal',
    value: function resetAfterGoal(paddle1, paddle2) {
      if (paddle1.goal) {
        this.x = _settings.boardGap + _settings.paddleWidth + this.radius;
        //calling coordinates method in paddle class to get the current y position of the paddle
        var paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
        var topY = paddle.topY,
            bottomY = paddle.bottomY;

        this.y = (topY + bottomY) / 2;
      } else if (paddle2.goal) {
        this.x = this.boardWidth - _settings.boardGap - _settings.paddleWidth - this.radius;
        var _paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
        var _topY = _paddle.topY,
            _bottomY = _paddle.bottomY;

        this.y = (_topY + _bottomY) / 2;
      }
    }

    //METHOD FOR WALL COLLISION OF THE BALL, WITH GOAL CALCULATION AND BALL POSITION RESET AFTER GOAL

  }, {
    key: 'wallCollision',
    value: function wallCollision(paddle1, paddle2) {
      var hitLeft = this.x - this.radius <= 0;
      var hitRight = this.x + this.radius >= this.boardWidth;
      var hitTop = this.y - this.radius <= 0;
      var hitBottom = this.y + this.radius >= this.boardHeight;

      if (hitLeft) {
        this.direction = -1;
        this.goal(paddle2);
        this.pong.play();

        this.resetAfterGoal(paddle1, paddle2);
      } else if (hitRight) {
        this.direction = 1;
        this.goal(paddle1);
        this.pong.play();

        this.resetAfterGoal(paddle1, paddle2);
      } else if (hitTop || hitBottom) {
        this.vy = -this.vy;
      }
    }

    //METHOD FOR PADDLE COLLISION DETECTION
    //fixed the bug that when ball resets at the edge of paddle, ball keeps bouncing

  }, {
    key: 'paddleCollision',
    value: function paddleCollision(paddle1, paddle2) {
      if (this.vx > 0 && !paddle1.goal) {

        // detect paddle collision on the right side (paddle2)
        var paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
        var leftX = paddle.leftX,
            topY = paddle.topY,
            bottomY = paddle.bottomY;


        if (this.x + this.radius >= leftX && this.y >= topY && this.y <= bottomY) {
          this.vx = -this.vx;
          this.ping.play();
        }
      } else if (this.vx < 0 && !paddle2.goal) {
        //detect paddle collision on the left side (paddle1)
        var _paddle2 = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
        var rightX = _paddle2.rightX,
            _topY2 = _paddle2.topY,
            _bottomY2 = _paddle2.bottomY; //let variables only exist within this block

        if (this.x - this.radius <= rightX && this.y >= _topY2 && this.y <= _bottomY2) {
          this.vx = -this.vx;
          this.ping.play();
        }
      }
    }

    //METHOD FOR FIRING THE BALL WHEN FIREKEY PRESSED

  }, {
    key: 'fireShot',
    value: function fireShot(paddle1, paddle2) {
      //generate speed when there's a goal on either side
      if (paddle1.goal && paddle1.fireKeyPressed) {

        while (this.vy === 0) {
          this.vy = Math.floor(Math.random() * 10 - 5);
        }
        //set vx accordingly, use 6 to avoide vx being 0
        this.vx = this.direction * (6 - Math.abs(this.vy));

        paddle1.fireKeyPressed = false;
        paddle1.goal = false;
      } else if (paddle2.goal && paddle2.fireKeyPressed) {
        while (this.vy === 0) {
          this.vy = Math.floor(Math.random() * 10 - 5);
        }
        //set vx accordingly, use 6 to avoide vx being 0
        this.vx = this.direction * (6 - Math.abs(this.vy));

        paddle2.fireKeyPressed = false;
        paddle2.goal = false;
      }
      //moves the ball along with the paddle, yet with no bouncing until firekey is pressed
      else if (paddle1.goal) {

          this.vx = 0;
          this.vy = 0;

          var paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
          var topY = paddle.topY,
              bottomY = paddle.bottomY;

          this.y = (topY + bottomY) / 2;
        } else if (paddle2.goal) {
          this.vx = 0;
          this.vy = 0;

          var _paddle3 = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
          var _topY3 = _paddle3.topY,
              _bottomY3 = _paddle3.bottomY;

          this.y = (_topY3 + _bottomY3) / 2;
        }
    }

    //METHOD FOR COUNTING GOAL FOR THE PADDLE

  }, {
    key: 'goal',
    value: function goal(paddle) {
      paddle.score++;
      paddle.goal = true;
    }
  }, {
    key: 'render',
    value: function render(svg, paddle1, paddle2) {
      this.y = this.y + this.vy;
      this.x = this.x + this.vx;

      this.wallCollision(paddle1, paddle2);
      this.paddleCollision(paddle1, paddle2);
      this.fireShot(paddle1, paddle2);

      var circle = document.createElementNS(_settings.SVG_NS, 'circle');

      circle.setAttributeNS(null, 'r', this.radius);
      circle.setAttributeNS(null, 'cx', this.x);
      circle.setAttributeNS(null, 'cy', this.y);
      circle.setAttributeNS(null, 'fill', '#ffffff');

      svg.appendChild(circle);
    }
  }]);

  return Ball;
}();

exports.default = Ball;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
  }

  _createClass(Board, [{
    key: 'render',
    value: function render(svg) {
      var rect = document.createElementNS(_settings.SVG_NS, 'rect');

      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'fill', '#353535');
      svg.appendChild(rect);

      var line = document.createElementNS(_settings.SVG_NS, 'line');

      line.setAttributeNS(null, 'x1', this.width / 2);
      line.setAttributeNS(null, 'x2', this.width / 2);
      line.setAttributeNS(null, 'y1', 0);
      line.setAttributeNS(null, 'y2', this.height);
      line.setAttributeNS(null, 'stroke', '#666600');
      line.setAttributeNS(null, 'stroke-dasharray', '15,15');
      line.setAttributeNS(null, 'stroke-width', '3');

      svg.appendChild(line);
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
  function Paddle(boardHeight, width, height, x, y, upKey, downKey, fireKey) {
    var _this = this;

    _classCallCheck(this, Paddle);

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.upKey = upKey;
    this.downKey = downKey;
    this.fireKey = fireKey;

    this.upPressed = false;
    this.downPressed = false;
    this.fireKeyPressed = false;

    this.speed = _settings.paddleSpeed; //paddle moving speed
    this.score = 0; //property for keeping score of the paddle
    this.goal = false; //property for goal detection 


    //EVENTLISTENER FOR PADDLE MOVEMENT CONTROL AND FIRE SHOT CONTROL
    //jquery equivelant of .on
    document.addEventListener('keydown', function (event) {
      //key pressed listner
      // event.preventDefault();
      switch (event.key) {
        case _this.upKey:
          _this.upPressed = true;
          break;
        case _this.downKey:
          _this.downPressed = true;
          break;
        case _this.fireKey:
          _this.fireKeyPressed = true;
      }
    });

    document.addEventListener('keyup', function (event) {
      //key pressed listner
      // event.preventDefault();
      switch (event.key) {
        case _this.upKey:
          _this.upPressed = false;
          break;
        case _this.downKey:
          _this.downPressed = false;
          break;
      }
    });
  }

  //METHOD TO CALCULATE COORDINATES OF 4 EDGES OF THE PADDLE


  _createClass(Paddle, [{
    key: 'coordinates',
    value: function coordinates(x, y, width, height) {
      var leftX = x;
      var rightX = x + width;
      var topY = y;
      var bottomY = y + height;
      return { leftX: leftX, rightX: rightX, topY: topY, bottomY: bottomY };
    }

    //METHOD FOR PADDLE  UP MOVEMENT WITHIN BOUNDARIES

  }, {
    key: 'up',
    value: function up() {
      //get max number
      //either 0 or the y position of the paddle
      this.y = Math.max(this.y - this.speed, 0);
    }
    //METHOD FOR PADDLE DOWN MOVEMENT WITHIN BOUNDARIES

  }, {
    key: 'down',
    value: function down() {
      //get the min number
      //either height of the board minus the height of the paddle or the y position plus the speed
      this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    }
  }, {
    key: 'render',
    value: function render(svg) {
      var rect = document.createElementNS(_settings.SVG_NS, 'rect');

      rect.setAttributeNS(null, 'x', this.x);
      rect.setAttributeNS(null, 'y', this.y);
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'fill', '#D3D3D3');
      svg.appendChild(rect);

      //ACHIEVING PADDLE SMOOTH MOVEMENT USING KEYUP & KEYDOWN
      if (this.upPressed) {
        this.up();
      }
      if (this.downPressed) {
        this.down();
      }
    }
  }]);

  return Paddle;
}();

exports.default = Paddle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(x, y, size, center) {
    _classCallCheck(this, Score);

    this.x = x;
    this.y = y;
    this.size = size;
    this.center = center;
  }

  _createClass(Score, [{
    key: 'render',
    value: function render(svg, score) {

      var text = document.createElementNS(_settings.SVG_NS, 'text');

      text.setAttributeNS(null, 'x', this.x);
      text.setAttributeNS(null, 'y', this.y);
      text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      text.setAttributeNS(null, 'font-size', this.size);
      text.setAttributeNS(null, 'fill', 'white');
      //center score using text-anchor attribute
      text.setAttributeNS(null, 'text-anchor', this.center);
      text.textContent = score;

      svg.appendChild(text);
    }
  }]);

  return Score;
}();

exports.default = Score;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//SIMILAR CLASS AS IN BALL.JS BUT WITH A FEW TWEAKS FOR RESET AND RANDOM COLOR METHOD
var TrippingBall = function () {
  function TrippingBall(radius, boardWidth, boardHeight) {
    _classCallCheck(this, TrippingBall);

    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-03.wav');

    this.reset();
  }

  _createClass(TrippingBall, [{
    key: 'reset',
    value: function reset() {
      //GENERATE RANDOM DIRECTION (-1 OR 1) TRIPPING BALL
      this.direction = 0;
      while (this.direction === 0) {
        this.direction = Math.floor(Math.random() * 3) - 1;
      }
      //GENERATE RANDOM APPEARING LOCATION OF THE TRIPPING BALL
      this.x = _settings.boardGap + _settings.paddleWidth + this.radius + Math.random() * (this.boardWidth - 2 * _settings.boardGap - 2 * _settings.paddleWidth - 2 * this.radius);
      this.y = Math.random() * (this.boardHeight - 2 * this.radius) + this.radius;

      //GENERATE RANDOM SPEED OF VX & VY
      //vy random number b/w (-5, 5)
      this.vy = 0;
      while (this.vy === 0) {
        this.vy = Math.floor(Math.random() * 10 - 5);
      }
      //set vx accordingly, use 6 to avoide vx being 0
      this.vx = this.direction * (6 - Math.abs(this.vy));
    }
  }, {
    key: 'wallCollision',
    value: function wallCollision(paddle1, paddle2) {
      var hitLeft = this.x - this.radius <= 0;
      var hitRight = this.x + this.radius >= this.boardWidth;
      var hitTop = this.y - this.radius <= 0;
      var hitBottom = this.y + this.radius >= this.boardHeight;

      if (hitLeft) {
        this.direction = -1;
        this.goal(paddle2);
        this.reset();
      } else if (hitRight) {
        this.direction = 1;
        this.goal(paddle1);
        this.reset();
      } else if (hitTop || hitBottom) {
        this.vy = -this.vy;
      }
    }
  }, {
    key: 'paddleCollision',
    value: function paddleCollision(paddle1, paddle2) {
      if (this.vx > 0) {

        // detect paddle collision on the right side (paddle2)
        var paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
        var leftX = paddle.leftX,
            topY = paddle.topY,
            bottomY = paddle.bottomY;


        if (this.x + this.radius >= leftX && this.y >= topY && this.y <= bottomY) {
          this.vx = -this.vx;
          this.ping.play();
        }
      } else {
        //detect paddle collision on the left side (paddle1)
        var _paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
        var rightX = _paddle.rightX,
            _topY = _paddle.topY,
            _bottomY = _paddle.bottomY; //let variables only exist within this block

        if (this.x - this.radius <= rightX && this.y >= _topY && this.y <= _bottomY) {
          this.vx = -this.vx;
          this.ping.play();
        }
      }
    }
  }, {
    key: 'goal',
    value: function goal(paddle) {
      paddle.score++;
      paddle.goal = true;
    }

    //GENERATE RANDOM COLORS FOR THE TRIPPING BALL

  }, {
    key: 'randomColor',
    value: function randomColor() {
      var color = '#',
          chars = '0123456789ABCDEF'.split('');
      for (var i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
      }

      return color;
    }
  }, {
    key: 'render',
    value: function render(svg, paddle1, paddle2) {
      this.y = this.y + this.vy;
      this.x = this.x + this.vx;

      var circle = document.createElementNS(_settings.SVG_NS, 'circle');
      circle.setAttributeNS(null, 'r', this.radius);
      circle.setAttributeNS(null, 'cx', this.x);
      circle.setAttributeNS(null, 'cy', this.y);
      circle.setAttributeNS(null, 'fill', this.randomColor());
      circle.setAttributeNS(null, 'id', 'trippingBall');

      svg.appendChild(circle);

      this.wallCollision(paddle1, paddle2);
      this.paddleCollision(paddle1, paddle2);
    }
  }]);

  return TrippingBall;
}();

exports.default = TrippingBall;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + __webpack_require__(1) + ");\n  src: url(" + __webpack_require__(1) + "?#iefix) format('embedded-opentype'),\n    url(" + __webpack_require__(14) + ") format('woff'),\n    url(" + __webpack_require__(13) + ") format('truetype'),\n    url(" + __webpack_require__(12) + "#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  text-align: center;\n}\n/* TEXT ANIMATION CSS BELOW */\n.text{\n  display: none;\n}\n#text{\n  display: block;\n  text-align: center;\n  animation: tripping 1s ease-in-out infinite;\n}\n\n@keyframes tripping{\n  0%{\n    font-size: 1rem;\n  }\n  50%{\n    font-size: 2.5rem;\n  }\n  100%{\n    font-size: 1rem;\n  }\n}", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);