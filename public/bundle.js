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
    _this.currentX = 300;
    _this.currentY = 950;
    _this.curentPos = [_this.currentX, _this.currentY];
    _this.velocity = 60;
    _this.currentSpeed = 1;
    _this.track = track;
    _this.trackCollision = false;
    _this.withinBounds = true;
    _this.calcNextPos = _this.calcNextPos.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Ball, [{
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
      if (this.trackCollision && (angle === 360 || angle === 0)) {
        angle = 180;
      } else if (this.trackCollision && angle === 180) {
        angle = 360;
      } else if (this.trackCollision && angle === 270) {
        angle = 90;
      }

      switch (angle) {
        case 270:
          this.calcNextPos([this.currentX + speed * this.velocity, this.currentY], speed, 'right');
          break;

        case 90:
          this.calcNextPos([this.currentX - speed * this.velocity, this.currentY], speed, 'left');
          break;

        case 180:
          this.calcNextPos([this.currentX, this.currentY + speed * this.velocity], speed, 'down');
          break;

        case 360:
        case 0:
          this.calcNextPos([this.currentX, this.currentY - speed * this.velocity], speed, 'up');
          break;

        default:
          break;
      }
    }
  }, {
    key: "calcNextPos",
    value: function calcNextPos(nextPos, speed, dir) {
      var _this2 = this;

      var c = 0;

      var _int = setInterval(function () {
        if (c > 2) {
          clearInterval(_int);
          c = 0;
          _this2.currentX = _this2.currentX;
        }

        if (_this2.currentX >= 1425) speed -= speed + 1;
        if (_this2.currentX <= 50) speed -= speed * 2 + 1;
        if (nextPos[0] >= _this2.currentX && dir === 'right') _this2.currentX += speed;
        if (nextPos[0] < _this2.currentX && dir === 'left') _this2.currentX -= speed;
        if (nextPos[1] > _this2.currentY && dir === 'down') _this2.currentY += speed;
        if (nextPos[1] < _this2.currentY && dir === 'up') _this2.currentY -= speed;
        c++;
      }, 60);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this3 = this;

      this.detectTrack();
      ctx.save();
      this.ball = new Image();

      this.ball.onload = function () {
        ctx.drawImage(_this3.ball, _this3.currentX, _this3.currentY, -(_this3.ball.width / 10), -(_this3.ball.height / 10));
      };

      this.ball.src = 'public/images/soccer_ball.png';
      ctx.restore();
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

    this.count = 1;
    this.ball1 = [350, 500];
    this.ball2 = [1375, 950];
    this.ball3 = [30, 740];
    this.ball4 = [1375, 650];
    this.ball5 = [1375, 325];
  }

  _createClass(BlueOrbs, [{
    key: "incrementCount",
    value: function incrementCount() {
      if (this.count >= 5) {
        this.count = 1;
      } else {
        this.count++;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      ctx.save();
      this.incrementCount();
      this.orb = new Image();

      this.orb.onload = function () {
        ctx.drawImage(_this.orb, 350, 550, 25, 25);
        ctx.drawImage(_this.orb, 1375, 950, 25, 25);
        ctx.drawImage(_this.orb, 30, 740, 25, 25);
        ctx.drawImage(_this.orb, 1375, 650, 25, 25);
        ctx.drawImage(_this.orb, 1375, 325, 25, 25);
      };

      this.orb.src = "public/images/orbs/".concat(this.count, ".png");
      ctx.restore();
    }
  }]);

  return BlueOrbs;
}();

module.exports = BlueOrbs;

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

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.walls = new Walls();
    this.track = new Track();
    this.ball = new Ball(this.track);
    this.vehicle = new Vehicle(this.ball);
    this.goal = new Goal();
    this.orb = new BlueOrbs();
  }

  _createClass(Game, [{
    key: "loadResources",
    value: function loadResources(ctx) {
      this.vehicle.draw(ctx);
      this.ball.draw(ctx);
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
    this.bgCtx = bgCtx;
    this.stCtx = stCtx;
    this.animate = this.animate.bind(this);
  }

  _createClass(GameView, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        if (e.key === 'e') _this.vehicle.rotateRight();
        if (e.key === 'q') _this.vehicle.rotateLeft();
        if (e.key === 'w') _this.vehicle.moveForward(e);
        if (e.code === 'Space') _this.vehicle.reduceSpeed(e);
      });
      document.addEventListener('keyup', function (e) {
        if (e.key === 'w') _this.vehicle.reduceSpeed(e);
      });
    }
  }, {
    key: "start",
    value: function start() {
      // document.addEventListener('click', e => {
      //     if(e.target.className === 'start-btn') {
      var audio = document.getElementById('song');
      audio.volume = 0.1; // audio.play()

      this.game.loadStatic(this.stCtx);
      this.setEventListeners();
      requestAnimationFrame(this.animate);
      document.querySelector('.start-btn').classList.add('hidden'); //     };
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
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
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
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(0, 875);
      ctx.lineTo(1250, 875);
      ctx.lineTo(1250, 825);
      ctx.lineTo(50, 825);
      ctx.lineTo(50, 775);
      ctx.lineTo(25, 775);
      ctx.lineTo(25, 625);
      ctx.lineTo(1250, 625);
      ctx.lineTo(1250, 525);
      ctx.lineTo(400, 525);
      ctx.lineTo(400, 600);
      ctx.lineTo(25, 600);
      ctx.lineTo(25, 300);
      ctx.lineTo(50, 300);
      ctx.lineTo(1250, 300);
      ctx.lineTo(1250, 275);
      ctx.lineTo(600, 275);
      ctx.lineTo(600, 100);
      ctx.lineWidth = 12;
      ctx.strokeStyle = 'white';
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, 990);
      ctx.lineTo(1415, 990);
      ctx.lineTo(1415, 725);
      ctx.lineTo(150, 725);
      ctx.lineTo(150, 700);
      ctx.lineTo(1415, 700);
      ctx.lineTo(1415, 400);
      ctx.lineTo(150, 400);
      ctx.lineTo(150, 375);
      ctx.lineTo(1415, 375);
      ctx.lineTo(1415, 200);
      ctx.lineTo(800, 200);
      ctx.lineTo(800, 100);
      ctx.lineWidth = 12;
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
  }]);

  return Track;
}();

module.exports = Track;

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

  function Vehicle(ball) {
    var _this;

    _classCallCheck(this, Vehicle);

    _this = _super.call(this, ball);
    _this.ball = ball;
    _this.directions = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    _this.currentDir = 270;
    _this.currentAngle = _this.currentDir;
    _this.minAngle = 0;
    _this.maxAngle = 360;
    _this.currentX = 75;
    _this.currentY = 950;
    _this.speed = 0;
    _this.currentSpeed = 0;
    _this.maxSpeed = 5;
    _this.ballDistance = 0;
    return _this;
  }

  _createClass(Vehicle, [{
    key: "rotateLeft",
    value: function rotateLeft() {
      if (this.currentAngle < this.maxAngle && this.currentAngle >= this.minAngle) {
        this.currentAngle += 30;
      } else if (this.currentAngle === 360) {
        this.currentAngle = 0;
      }

      if (this.directions.includes(this.currentAngle)) {
        this.currentDir = this.currentAngle;
      }
    }
  }, {
    key: "detectBall",
    value: function detectBall() {
      this.ballDistance = this.findDistance(this.currentX, this.currentY, this.ball.currentX, this.ball.currentY);

      if (this.ballDistance <= 55) {
        this.ball.vehicleHit(this.currentDir, this.currentSpeed);
      }
    }
  }, {
    key: "rotateRight",
    value: function rotateRight() {
      if (this.currentAngle <= this.maxAngle && this.currentAngle > this.minAngle) {
        this.currentAngle -= 30;
      } else if (this.currentAngle === 0) {
        this.currentAngle = 330;
      }

      if (this.directions.includes(this.currentAngle)) {
        this.currentDir = this.currentAngle;
      }
    }
  }, {
    key: "moveForward",
    value: function moveForward(e) {
      if (this.maxSpeed > this.speed && e.type === 'keydown') {
        this.speed += 0.2;
      }

      this.currentSpeed = Math.floor(this.speed);
    }
  }, {
    key: "reduceSpeed",
    value: function reduceSpeed(e) {
      if (e.code === 'Space' && this.speed >= 0.4) {
        this.speed -= 0.4;
      } else if (e.key === 'w' && this.speed > 0) {
        this.speed -= this.speed / 2;
      }

      this.currentSpeed = Math.floor(this.speed);
    }
  }, {
    key: "calcNextPos",
    value: function calcNextPos() {
      if (this.currentX <= 0) this.currentDir = 270;
      if (this.currentX >= 1450) this.currentDir = 90;
      if (this.currentY >= 1000) this.currentDir = 0;

      switch (this.currentDir) {
        case 270:
          this.currentX += this.currentSpeed;
          break;

        case 360:
        case 0:
          this.currentY -= this.currentSpeed;
          break;

        case 90:
          this.currentX -= this.currentSpeed;
          break;

        case 180:
          this.currentY += this.currentSpeed;
          break;

        case 240:
        case 210:
          this.currentX += this.currentSpeed;
          this.currentY += this.currentSpeed / 2;
          break;

        case 300:
        case 330:
          this.currentX += this.currentSpeed;
          this.currentY -= this.currentSpeed / 2;
          break;

        case 150:
        case 120:
          this.currentX -= this.currentSpeed;
          this.currentY += this.currentSpeed / 2;
          break;

        default:
          this.currentX -= this.currentSpeed;
          this.currentY -= this.currentSpeed / 2;
          break;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this2 = this;

      this.calcNextPos();
      this.detectBall();
      this.currentSpeed = Math.floor(this.speed);
      var x = Math.cos(Math.PI / 180 * this.currentDir);
      var y = Math.sin(Math.PI / 180 * this.currentDir);
      ctx.save();
      ctx.rotate(this.currentDir * Math.PI / 180);
      ctx.translate(x, y);
      this.vehicle = new Image();

      this.vehicle.onload = function () {
        ctx.clearRect(0, 0, 1425, 1000);
        ctx.drawImage(_this2.vehicle, _this2.currentX, _this2.currentY, -(_this2.vehicle.width / 10), -(_this2.vehicle.height / 10));
      };

      this.vehicle.src = "public/images/car_imgs/".concat(this.currentDir, ".png");
      ctx.restore();
    }
  }]);

  return Vehicle;
}(MovingObject);

;
module.exports = Vehicle;

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