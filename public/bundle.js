/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/ball.js":
/*!************************************!*\
  !*** ./public/javascripts/ball.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MovingObject = __webpack_require__(/*! ./moving_objects */ "./public/javascripts/moving_objects.js");

var Ball = /*#__PURE__*/function (_MovingObject) {
  _inherits(Ball, _MovingObject);

  var _super = _createSuper(Ball);

  function Ball(track) {
    var _this;

    _classCallCheck(this, Ball);

    _this = _super.call(this);
    _this.currentX = 700;
    _this.currentY = 400;
    _this.curentPos = [_this.currentX, _this.currentY];
    _this.velocity = 60;
    _this.currentSpeed = 0;
    _this.currentAngle = 0;
    _this.track = track;
    _this.trackCollision = false;
    _this.withinBounds = true; // this.calcNextPos = this.calcNextPos.bind(this)

    _this.impact = document.getElementById('impact');
    return _this;
  }

  _createClass(Ball, [{
    key: "detectGoal",
    value: function detectGoal() {
      if (this.currentX >= 650 && this.currentX <= 800 && this.currentY <= 120) {
        var endGame = document.getElementById('end-game-container'); // endGame.classList.remove('hidden');
      }
    }
  }, {
    key: "detectTrack",
    value: function detectTrack() {
      var distance = 0;

      if (this.currentX < 1250 && this.currentY <= 950 && this.currentY >= 880) {
        distance = this.findDistance(this.currentX, this.currentY, this.currentX, 875);
      } else if (this.currentY > 950 && this.currentY <= 1000) {
        distance = this.findDistance(this.currentX, this.currentY, this.currentX, 990);
      } else if (this.currentX >= 1400 && this.currentY >= 725) {
        distance = this.findDistance(this.currentX, this.currentY, 1400, this.currentY);
      } else {
        distance = 100;
      }

      distance < 50 ? this.trackCollision = true : this.trackCollision = false;
      distance >= 50 ? this.withinBounds = true : this.withinBounds = false;
    }
  }, {
    key: "vehicleHit",
    value: function vehicleHit(angle, speed) {
      var _this2 = this;

      this.currentAngle = angle;
      this.currentSpeed = speed * 2;
      setTimeout(function () {
        return _this2.currentSpeed = 0;
      }, 300);
      this.impact.play();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this3 = this;

      this.detectGoal(); // this.detectTrack()

      this.currentX += this.currentSpeed * Math.cos(Math.PI / 180 * this.currentAngle);
      this.currentY += this.currentSpeed * Math.sin(Math.PI / 180 * this.currentAngle);
      this.ball = new Image();
      this.ball.src = 'public/images/soccer_ball.png';
      this.ball.width = 50;
      this.ball.height = 50;

      this.ball.onload = function () {
        ctx.save();
        ctx.translate(_this3.currentX, _this3.currentY);
        ctx.rotate(Math.PI / 180 * _this3.currentAngle);
        ctx.drawImage(_this3.ball, -(_this3.ball.width / 2), -(_this3.ball.height / 2), _this3.ball.width, _this3.ball.height);
        ctx.restore();
      };
    }
  }]);

  return Ball;
}(MovingObject);

module.exports = Ball;

/***/ }),

/***/ "./public/javascripts/blue_orbs.js":
/*!*****************************************!*\
  !*** ./public/javascripts/blue_orbs.js ***!
  \*****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlueOrbs = /*#__PURE__*/function () {
  function BlueOrbs() {
    _classCallCheck(this, BlueOrbs);

    this.count = 0;
    this.xPos = [350, 1375, 30, 1375, 1375];
    this.yPos = [500, 950, 740, 50, 325];
    this.height = 25;
    this.width = 25;
  }

  _createClass(BlueOrbs, [{
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      this.count >= 4 ? this.count = 0 : this.count++;
      ctx.save();
      this.orb = new Image();

      this.orb.onload = function () {
        ctx.drawImage(_this.orb, _this.xPos[0], _this.yPos[0], 25, 25);
        ctx.drawImage(_this.orb, _this.xPos[1], _this.yPos[1], 25, 25);
        ctx.drawImage(_this.orb, _this.xPos[2], _this.yPos[2], 25, 25);
        ctx.drawImage(_this.orb, _this.xPos[3], _this.yPos[3], 25, 25);
        ctx.drawImage(_this.orb, _this.xPos[4], _this.yPos[4], 25, 25);
      };

      this.orb.src = "public/images/orbs/".concat(this.count, ".png");
      ctx.restore();
    }
  }]);

  return BlueOrbs;
}();

module.exports = BlueOrbs;

/***/ }),

/***/ "./public/javascripts/enemy_vehicle.js":
/*!*********************************************!*\
  !*** ./public/javascripts/enemy_vehicle.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Vehicle = __webpack_require__(/*! ./vehicle */ "./public/javascripts/vehicle.js");

var EnemyVehicle = /*#__PURE__*/function (_Vehicle) {
  _inherits(EnemyVehicle, _Vehicle);

  var _super = _createSuper(EnemyVehicle);

  function EnemyVehicle(ball) {
    var _this;

    _classCallCheck(this, EnemyVehicle);

    _this = _super.call(this, ball);
    _this.ball = ball;
    _this.currentX = 640;
    _this.currentY = 150;
    _this.currentDir = 180;
    _this.currentSpeed = 7;
    _this.moveRight = true;
    return _this;
  }

  _createClass(EnemyVehicle, [{
    key: "calcNextPos",
    value: function calcNextPos() {
      if (this.currentX > 640 && this.currentX < 800 && this.moveRight === true) {
        this.currentX += 1;
      } else if (this.currentX === 800) {
        this.moveRight = false;
        this.currentX -= 1;
      } else if (this.currentX === 640) {
        this.moveRight = true;
        this.currentX += 1;
      } else if (this.moveRight === false) {
        this.currentX -= 1;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this2 = this;

      this.detectBall();
      this.calcNextPos(); // ctx.save()

      this.vehicle = new Image();

      this.vehicle.onload = function () {
        ctx.drawImage(_this2.vehicle, _this2.currentX, _this2.currentY, -(_this2.vehicle.width / 4), -(_this2.vehicle.height / 4));
      };

      this.vehicle.src = 'public/images/car_imgs/red_car.png'; // ctx.restore()
    }
  }]);

  return EnemyVehicle;
}(Vehicle);

module.exports = EnemyVehicle;

/***/ }),

/***/ "./public/javascripts/game.js":
/*!************************************!*\
  !*** ./public/javascripts/game.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vehicle = __webpack_require__(/*! ./vehicle */ "./public/javascripts/vehicle.js");

var Ball = __webpack_require__(/*! ./ball */ "./public/javascripts/ball.js");

var Track = __webpack_require__(/*! ./track */ "./public/javascripts/track.js");

var Walls = __webpack_require__(/*! ./walls */ "./public/javascripts/walls.js");

var Goal = __webpack_require__(/*! ./goal */ "./public/javascripts/goal.js");

var BlueOrbs = __webpack_require__(/*! ./blue_orbs */ "./public/javascripts/blue_orbs.js");

var EnemyVehicle = __webpack_require__(/*! ./enemy_vehicle */ "./public/javascripts/enemy_vehicle.js");

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.walls = new Walls();
    this.track = new Track();
    this.ball = new Ball(this.track);
    this.orb = new BlueOrbs();
    this.vehicle = new Vehicle(this.ball, this.orb);
    this.enemyVehicle = new EnemyVehicle(this.ball);
    this.goal = new Goal();
  }

  _createClass(Game, [{
    key: "loadResources",
    value: function loadResources(ctx) {
      this.vehicle.draw(ctx);
      this.ball.draw(ctx);
      this.enemyVehicle.draw(ctx);
    }
  }, {
    key: "loadStatic",
    value: function loadStatic(sCtx) {
      var _this = this;

      this.walls.draw(sCtx);
      this.track.draw(sCtx);
      this.goal.draw(sCtx);
      setInterval(function () {
        return _this.orb.draw(sCtx);
      }, 80);
    }
  }]);

  return Game;
}();

;
module.exports = Game;

/***/ }),

/***/ "./public/javascripts/game_view.js":
/*!*****************************************!*\
  !*** ./public/javascripts/game_view.js ***!
  \*****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameView = /*#__PURE__*/function () {
  function GameView(game, ctx, bgCtx, stCtx) {
    _classCallCheck(this, GameView);

    this.game = game;
    this.vehicle = this.game.vehicle;
    this.ctx = ctx;
    this.stCtx = stCtx;
    this.animate = this.animate.bind(this);
    this.start = this.start.bind(this);
  }

  _createClass(GameView, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        if (e.key === 'e' || e.key === 'q') _this.vehicle.rotateVehicle(e);
        if (e.key === 'w' || e.key === 's') _this.vehicle.moveVehicle(e);
        if (e.key === 'f') _this.vehicle.testFunc();
        if (e.code === 'Space') _this.vehicle.reduceSpeed(e);
      });
      document.addEventListener('keyup', function (e) {
        if (e.key === 'w') _this.vehicle.reduceSpeed(e);
      });
    }
  }, {
    key: "restart",
    value: function restart() {// const newGame = new GameView
    }
  }, {
    key: "start",
    value: function start() {
      // document.addEventListener('click', e => {
      // if(e.target.className === 'start-btn') {
      var audio = document.getElementById('song');
      audio.volume = 0.1; // audio.play()

      this.game.loadStatic(this.stCtx);
      this.setEventListeners();
      requestAnimationFrame(this.animate); // document.querySelector('.start-game-container').classList.add('hidden')
      // };
      // });
    }
  }, {
    key: "animate",
    value: function animate() {
      this.game.loadResources(this.ctx);
      requestAnimationFrame(this.animate);
    }
  }]);

  return GameView;
}();

;
module.exports = GameView;

/***/ }),

/***/ "./public/javascripts/goal.js":
/*!************************************!*\
  !*** ./public/javascripts/goal.js ***!
  \************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Goal = /*#__PURE__*/function () {
  function Goal() {
    _classCallCheck(this, Goal);
  }

  _createClass(Goal, [{
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      this.goal = new Image();

      this.goal.onload = function () {
        ctx.drawImage(_this.goal, 600, 0, 200, 100);
      };

      this.goal.src = 'public/images/goal.png';
    }
  }]);

  return Goal;
}();

module.exports = Goal;

/***/ }),

/***/ "./public/javascripts/moving_objects.js":
/*!**********************************************!*\
  !*** ./public/javascripts/moving_objects.js ***!
  \**********************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovingObject = /*#__PURE__*/function () {
  function MovingObject() {
    _classCallCheck(this, MovingObject);
  }

  _createClass(MovingObject, [{
    key: "findDistance",
    value: function findDistance(x1, y1, x2, y2) {
      //    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
      return Math.hypot(x2 - x1, y2 - y1);
    }
  }]);

  return MovingObject;
}();

module.exports = MovingObject;

/***/ }),

/***/ "./public/javascripts/track.js":
/*!*************************************!*\
  !*** ./public/javascripts/track.js ***!
  \*************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Track = /*#__PURE__*/function () {
  function Track() {
    _classCallCheck(this, Track);
  }

  _createClass(Track, [{
    key: "draw",
    value: function draw(ctx) {}
  }]);

  return Track;
}();

;
module.exports = Track;
/* 
ctx.beginPath()
        ctx.moveTo(0, 875)
        ctx.lineTo(1250, 875)
        ctx.lineTo(1250, 825)
        ctx.lineTo(50, 825)
        ctx.lineTo(50, 775)
        ctx.lineTo(25, 775)
        ctx.lineTo(25, 625)
        ctx.lineTo(1250, 625)
        ctx.lineTo(1250, 525)
        ctx.lineTo(400, 525)
        ctx.lineTo(400, 600)
        ctx.lineTo(25, 600)
        ctx.lineTo(25, 300)
        ctx.lineTo(50, 300)
        ctx.lineTo(1250, 300)
        ctx.lineTo(1250, 275)
        ctx.lineTo(600, 275)
        ctx.lineTo(600, 100)
        ctx.lineWidth = 12;
        ctx.strokeStyle = 'white';
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, 990)
        ctx.lineTo(1415, 990)
        ctx.lineTo(1415, 725)
        ctx.lineTo(150, 725)
        ctx.lineTo(150, 700)
        ctx.lineTo(1415, 700)
        ctx.lineTo(1415, 400)
        ctx.lineTo(150, 400)
        ctx.lineTo(150, 375)
        ctx.lineTo(1415, 375)
        ctx.lineTo(1415, 200)
        ctx.lineTo(800, 200)
        ctx.lineTo(800, 100)
        ctx.lineWidth = 12;
        ctx.strokeStyle = 'white';
        ctx.stroke()
*/

/***/ }),

/***/ "./public/javascripts/vehicle.js":
/*!***************************************!*\
  !*** ./public/javascripts/vehicle.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MovingObject = __webpack_require__(/*! ./moving_objects */ "./public/javascripts/moving_objects.js");

var Vehicle = /*#__PURE__*/function (_MovingObject) {
  _inherits(Vehicle, _MovingObject);

  var _super = _createSuper(Vehicle);

  function Vehicle(ball, orb) {
    var _this;

    _classCallCheck(this, Vehicle);

    _this = _super.call(this, ball);
    _this.ball = ball;
    _this.orb = orb;
    _this.currentAngle = 0; // this.currentX = 75;
    // this.currentY = 950;

    _this.currentX = 550;
    _this.currentY = 400;
    _this.speed = 0;
    _this.currentSpeed = 0;
    _this.maxSpeed = 7;
    _this.boostedSpeed = 8;
    _this.ballDistance = 0;
    _this.orbDetected = false;
    return _this;
  }

  _createClass(Vehicle, [{
    key: "rotateVehicle",
    value: function rotateVehicle(e) {
      if (e.key === 'q') {
        if (this.currentAngle <= -360) this.currentAngle = 0;
        if (this.maxSpeed > this.currentSpeed) this.currentSpeed += 0.1;
        this.currentAngle -= 5 + this.currentSpeed;
      } else if (e.key === 'e') {
        if (this.currentAngle >= 360) this.currentAngle = 0;
        if (this.maxSpeed > this.currentSpeed) this.currentSpeed += 0.1;
        this.currentAngle += 5 + this.currentSpeed;
      }
    }
  }, {
    key: "moveVehicle",
    value: function moveVehicle(e) {
      if (e.key === 'w' && this.maxSpeed > this.speed && e.type === 'keydown') {
        this.speed += 0.4;
      } else if (e.key === 's' && e.type === 'keydown') {
        this.speed -= 0.1;
      }

      this.currentSpeed = Math.floor(this.speed);
    }
  }, {
    key: "detectBall",
    value: function detectBall() {
      var x = this.currentX;
      var y = this.currentY;
      this.ballDistance = this.findDistance(x, y, this.ball.currentX, this.ball.currentY);

      if (this.ballDistance <= 65) {
        this.ball.vehicleHit(this.currentAngle, this.currentSpeed);
      }
    }
  }, {
    key: "reduceSpeed",
    value: function reduceSpeed(e) {
      e.preventDefault();

      if (e.code === 'Space' && this.speed >= 0.4) {
        this.speed -= 0.4;
      } else if (e.key === 'w' && this.speed > 0) {
        this.speed -= this.speed / 2;
      } else if (this.speed < 0) {
        this.speed += 0.4;
      }

      this.currentSpeed = Math.floor(this.speed);
    }
  }, {
    key: "testFunc",
    value: function testFunc() {
      console.log(this.currentX);
      console.log(this.ball.currentX);
      console.log(this.ballDistance);
    }
  }, {
    key: "detectOrb",
    value: function detectOrb() {
      var _this2 = this;

      for (var i = 0; i < this.orb.xPos.length; i++) {
        var orbDistance = this.findDistance(this.currentX, this.currentY, this.orb.xPos[i], this.orb.yPos[i]);

        if (orbDistance <= 60) {
          this.orbDetected = true;
          setTimeout(function () {
            return _this2.orbDetected = false;
          }, 5000);
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this3 = this;

      this.detectBall(); // this.detectOrb();
      // window.scroll(this.currentX, this.currentY / 2)

      if (this.currentX > 1425) this.currentAngle = 180;
      if (this.currentX < 0) this.currentAngle = 360;
      if (this.currentY > 1000) this.currentAngle = 270;
      if (this.currentY < 0) this.currentAngle = 90;
      this.currentX += this.currentSpeed * Math.cos(Math.PI / 180 * this.currentAngle);
      this.currentY += this.currentSpeed * Math.sin(Math.PI / 180 * this.currentAngle);
      this.vehicle = new Image();
      this.vehicle.src = "public/images/car_imgs/270.png";
      this.vehicle.width = 80;
      this.vehicle.height = 40;

      this.vehicle.onload = function () {
        ctx.clearRect(0, 0, 1425, 1000);
        ctx.save();
        ctx.translate(_this3.currentX, _this3.currentY);
        ctx.rotate(Math.PI / 180 * _this3.currentAngle);
        ctx.drawImage(_this3.vehicle, -(_this3.vehicle.width / 2), -(_this3.vehicle.height / 2), _this3.vehicle.width, _this3.vehicle.height);
        ctx.restore();
      };
    }
  }]);

  return Vehicle;
}(MovingObject);

;
module.exports = Vehicle;
/*
let bgCtx = document.getElementById('bg-canvas').getContext('2d');
        let sCtx = document.getElementById('static-canvas').getContext('2d')
bgCtx.save()
        sCtx.save()
        ctx.rotate(this.currentDir * Math.PI/180);
        bgCtx.rotate(this.currentDir * Math.PI/180);
        sCtx.rotate(this.currentDir * Math.PI/180);
 bgCtx.translate(-this.currentX, -this.currentY);
        sCtx.translate(-this.currentX, -this.currentY);
 bgCtx.restore()
        
        
        sCtx.restore()
*/

/***/ }),

/***/ "./public/javascripts/walls.js":
/*!*************************************!*\
  !*** ./public/javascripts/walls.js ***!
  \*************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Walls = /*#__PURE__*/function () {
  function Walls() {
    _classCallCheck(this, Walls);

    this.x = 0;
    this.y = 500;
  }

  _createClass(Walls, [{
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      // ctx.save();
      this.stone = new Image();

      this.stone.onload = function () {
        for (var i = 0; i < 10; i++) {
          ctx.drawImage(_this.stone, _this.x, 500, 100, 100);
          _this.x += 75;
        }

        ;
      }; // this.stone.src = 'public/images/stone.png'
      // ctx.restore();

    }
  }]);

  return Walls;
}();

module.exports = Walls;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./public/javascripts/index.js ***!
  \*************************************/
var Game = __webpack_require__(/*! ./game */ "./public/javascripts/game.js");

var GameView = __webpack_require__(/*! ./game_view */ "./public/javascripts/game_view.js");

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('game-canvas');
  var bg = document.getElementById('bg-canvas');
  var sCanvas = document.getElementById('static-canvas');
  var ctx = canvas.getContext('2d');
  var bgCtx = bg.getContext('2d');
  var stCtx = sCanvas.getContext('2d');
  var game = new Game();
  new GameView(game, ctx, bgCtx, stCtx).start();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map