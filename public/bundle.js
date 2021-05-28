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

  function Ball(track, timer) {
    var _this;

    _classCallCheck(this, Ball);

    _this = _super.call(this);
    _this.track = track;
    _this.timer = timer;
    _this.currentX = 500;
    _this.currentY = 1900;
    _this.velocity = 0;
    _this.currentAngle = 0;
    _this.barrierDetected = false;
    _this.goalDetected = false;
    _this.impact = document.getElementById('impact');
    _this.impact.volume = 0.3;
    return _this;
  }

  _createClass(Ball, [{
    key: "vehicleHit",
    value: function vehicleHit(angle, speed) {
      var _this2 = this;

      clearTimeout(this.vehicleHit, 100);
      this.impact.play();
      this.currentAngle = angle;
      this.velocity = speed * 2;
      setTimeout(function () {
        return _this2.velocity = 0;
      }, speed * 100);
    }
  }, {
    key: "detectBounds",
    value: function detectBounds() {
      if (this.currentX >= 1425) {
        this.currentAngle = 180;
        this.currentX -= this.velocity + 1;
        this.impact.play();
      } else if (this.currentX <= 0) {
        this.currentAngle = 0;
        this.currentX += this.velocity + 1;
        this.impact.play();
      } else if (this.currentY > 2000) {
        this.currentAngle = 270;
        this.currentY -= this.velocity + 1;
        this.impact.play();
      } else if (this.currentY < 0) {
        this.currentAngle = 90;
        this.currentY += this.velocity + 1;
        this.impact.play();
      }

      ;
    }
  }, {
    key: "detectGoal",
    value: function detectGoal() {
      if (this.currentX >= 620 && this.currentX <= 800 && this.currentY <= 20) {
        this.timer.gameOver = true;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.currentX = 500;
      this.currentY = 1900;
      this.velocity = 0;
      this.currentAngle = 0;
      this.barrierDetected = false;
      this.goalDetected = false;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this3 = this;

      this.detectGoal();
      this.detectBarrier();

      if (this.barrierDetected) {
        if (Math.abs(this.currentAngle) < 180) {
          this.currentAngle += 180;
          this.currentY += this.velocity + 2;
        } else {
          this.currentAngle -= 180;
          this.currentY -= this.velocity + 2;
        }

        ;
      }

      ;
      this.barrierDetected = false;
      this.detectBounds();
      this.currentX += this.velocity * Math.cos(Math.PI / 180 * this.currentAngle);
      this.currentY += this.velocity * Math.sin(Math.PI / 180 * this.currentAngle);
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

;
module.exports = Ball;

/***/ }),

/***/ "./public/javascripts/boost_bar.js":
/*!*****************************************!*\
  !*** ./public/javascripts/boost_bar.js ***!
  \*****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BoostBar = /*#__PURE__*/function () {
  function BoostBar() {
    _classCallCheck(this, BoostBar);

    this.boostLevel = 294;
  }

  _createClass(BoostBar, [{
    key: "decrementBoost",
    value: function decrementBoost() {
      if (this.boostLevel > 0) {
        this.boostLevel -= 1;
      }

      ;
    }
  }, {
    key: "incrementBoost",
    value: function incrementBoost() {
      if (this.boostLevel < 294 && this.boostLevel >= 147) {
        this.boostLevel = 294;
      } else if (this.boostLevel < 147 && this.boostLevel >= 0) {
        this.boostLevel = 147;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.boostLevel = 294;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var y = window.scrollY + 170;
      var x = 0;
      ctx.strokeRect(x, y, 40, 300);
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgb(45, 45, 50)';
      ctx.fillRect(x + 3, y + 3, 35, this.boostLevel);
      ctx.fillStyle = 'rgb(83, 210, 209, 0.8)';
    }
  }]);

  return BoostBar;
}();

;
module.exports = BoostBar;

/***/ }),

/***/ "./public/javascripts/enemy.js":
/*!*************************************!*\
  !*** ./public/javascripts/enemy.js ***!
  \*************************************/
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

var Enemy = /*#__PURE__*/function (_Vehicle) {
  _inherits(Enemy, _Vehicle);

  var _super = _createSuper(Enemy);

  function Enemy(options, ball, player) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _super.call(this, ball);
    _this.options = options;
    _this.startPos = [options.x, options.y];
    _this.currentX = options.x;
    _this.currentY = options.y;
    _this.currentAngle = options.a;
    _this.ball = ball;
    _this.player = player;
    _this.nextX = _this.currentX + 200;
    _this.nextY = _this.currentY + 200;
    _this.currentSpeed = 5;
    _this.moveDir = true;
    return _this;
  }

  _createClass(Enemy, [{
    key: "detectBall",
    value: function detectBall() {
      var dist = this.findDistance(this.currentX, this.currentY, this.ball.currentX, this.ball.currentY);

      if (dist <= 70) {
        this.ball.vehicleHit(this.currentAngle, this.currentSpeed);
      }

      ;
    }
  }, {
    key: "detectPlayer",
    value: function detectPlayer() {
      var dist = this.findDistance(this.currentX, this.currentY, this.player.currentX, this.player.currentY);

      if (dist < 60) {
        this.player.health -= 10;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx, dir) {
      var _this2 = this;

      this.detectBall();
      this.detectPlayer();
      this.calcEnemyMove(dir);
      this.vehicle = new Image();
      this.vehicle.src = "public/images/car_imgs/".concat(this.options.c, "_car.png");
      this.vehicle.width = this.options.w;
      this.vehicle.height = this.options.h;

      this.vehicle.onload = function () {
        ctx.save();
        ctx.translate(_this2.currentX, _this2.currentY);
        ctx.rotate(Math.PI / 180 * _this2.currentAngle);
        ctx.drawImage(_this2.vehicle, -(_this2.vehicle.width / 2), -(_this2.vehicle.height / 2), _this2.vehicle.width, _this2.vehicle.height);
        ctx.restore();
      };
    }
  }]);

  return Enemy;
}(Vehicle);

;
module.exports = Enemy;

/***/ }),

/***/ "./public/javascripts/enemy_goalie.js":
/*!********************************************!*\
  !*** ./public/javascripts/enemy_goalie.js ***!
  \********************************************/
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

var EnemyGoalie = /*#__PURE__*/function (_Vehicle) {
  _inherits(EnemyGoalie, _Vehicle);

  var _super = _createSuper(EnemyGoalie);

  function EnemyGoalie(pos, ball) {
    var _this;

    _classCallCheck(this, EnemyGoalie);

    _this = _super.call(this, pos, ball);
    _this.ball = ball;
    _this.startPos = pos;
    _this.currentX = pos[0];
    _this.currentY = pos[1];
    _this.nextX = _this.currentX + 150;
    _this.currentAngle = 90;
    _this.currentSpeed = 10;
    _this.moveDir = true;
    return _this;
  }

  _createClass(EnemyGoalie, [{
    key: "draw",
    value: function draw(ctx, dir) {
      var _this2 = this;

      this.detectBall();
      this.calcEnemyMove(dir);
      this.vehicle = new Image();
      this.vehicle.src = 'public/images/car_imgs/red_car.png';
      this.vehicle.width = 80;
      this.vehicle.height = 50;

      this.vehicle.onload = function () {
        ctx.save();
        ctx.translate(_this2.currentX, _this2.currentY);
        ctx.rotate(Math.PI / 180 * _this2.currentAngle);
        ctx.drawImage(_this2.vehicle, -(_this2.vehicle.width / 2), -(_this2.vehicle.height / 2), _this2.vehicle.width, _this2.vehicle.height);
        ctx.restore();
      };
    }
  }]);

  return EnemyGoalie;
}(Vehicle);

module.exports = EnemyGoalie;

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

var EnemyGoalie = __webpack_require__(/*! ./enemy_goalie */ "./public/javascripts/enemy_goalie.js");

var Enemy = __webpack_require__(/*! ./enemy */ "./public/javascripts/enemy.js");

var EnemyVehicle = /*#__PURE__*/function (_Vehicle) {
  _inherits(EnemyVehicle, _Vehicle);

  var _super = _createSuper(EnemyVehicle);

  function EnemyVehicle(ball, player) {
    var _this;

    _classCallCheck(this, EnemyVehicle);

    _this = _super.call(this, ball, player);
    _this.enemyGoalie = new EnemyGoalie([600, 100], ball);
    _this.enemy1 = new Enemy({
      x: 250,
      y: 800,
      a: 270,
      c: 'green',
      h: 80,
      w: 90
    }, ball, player);
    _this.enemy2 = new Enemy({
      x: 1200,
      y: 500,
      a: 270,
      c: 'yellow',
      h: 60,
      w: 90
    }, ball, player);
    _this.enemy3 = new Enemy({
      x: 1200,
      y: 1200,
      a: 180,
      c: 'red',
      h: 50,
      w: 80
    }, ball, player);
    _this.enemy4 = new Enemy({
      x: 100,
      y: 1500,
      a: 0,
      c: 'purple',
      h: 40,
      w: 80
    }, ball, player);
    _this.enemy5 = new Enemy({
      x: 1200,
      y: 1750,
      a: 270,
      c: 'pink',
      h: 50,
      w: 90
    }, ball, player);
    return _this;
  }

  _createClass(EnemyVehicle, [{
    key: "draw",
    value: function draw(ctx) {
      this.enemyGoalie.draw(ctx, 'horz');
      this.enemy1.draw(ctx, 'vert');
      this.enemy2.draw(ctx, 'vert');
      this.enemy3.draw(ctx, 'horz');
      this.enemy4.draw(ctx, 'horz');
      this.enemy5.draw(ctx, 'vert');
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

var Goal = __webpack_require__(/*! ./goal */ "./public/javascripts/goal.js");

var Orbs = __webpack_require__(/*! ./orbs */ "./public/javascripts/orbs.js");

var EnemyVehicle = __webpack_require__(/*! ./enemy_vehicle */ "./public/javascripts/enemy_vehicle.js");

var BoostBar = __webpack_require__(/*! ./boost_bar */ "./public/javascripts/boost_bar.js");

var Timer = __webpack_require__(/*! ./timer */ "./public/javascripts/timer.js");

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.track = new Track();
    this.timer = new Timer();
    this.ball = new Ball(this.track, this.timer);
    this.boostBar = new BoostBar();
    this.vehicle = new Vehicle(this.ball, this.track, this.boostBar);
    this.orbs = new Orbs(this.vehicle, this.boostBar);
    this.enemyVehicle = new EnemyVehicle(this.ball, this.vehicle);
    this.goal = new Goal();
    this.score = 120;
    this.award = null;
    this.endGame = false;
  }

  _createClass(Game, [{
    key: "loadResources",
    value: function loadResources(ctx) {
      this.vehicle.draw(ctx);
      this.ball.draw(ctx);
      this.enemyVehicle.draw(ctx);
      this.boostBar.draw(ctx);
    }
  }, {
    key: "loadStatic",
    value: function loadStatic(sCtx) {
      var _this = this;

      this.track.draw(sCtx);
      this.goal.draw(sCtx);
      var tInt = setInterval(function () {
        _this.restart = false;

        _this.timer.increment();

        if (_this.timer.gameOver) {
          _this.timer.secs > 0 ? _this.score = _this.timer.secs : null;
          _this.endGame = true;
          clearInterval(tInt);
          clearInterval(oInt);

          _this.gameOver();
        }

        ;
      }, 1000);
      var oInt = setInterval(function () {
        return _this.orbs.draw(sCtx);
      }, 80);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.endGame) {
        var endGame = document.getElementById('end-game-container');
        var awardMsg = document.getElementById('award-message');
        var timeMsg = document.getElementById('time-message');
        var endState = document.querySelector('.end-game-stats');
        var oldMedal = document.getElementById('medal');
        oldMedal ? oldMedal.remove() : null;
        var medal = document.createElement('img');
        medal.id = "medal";
        endGame.classList.remove('hidden');

        if (this.timer.secs >= 90 && this.timer.secs < 120) {
          this.award = 'gold';
          awardMsg.innerText = 'You crushed it! You deserve this Gold medal!';
        } else if (this.timer.secs >= 60 && this.timer.secs < 90) {
          this.award = 'silver';
          awardMsg.innerText = "Whooo that was quick! Here's your Silver medal!";
        } else if (this.timer.secs > 30 && this.timer.secs < 60) {
          this.award = 'bronze';
          awardMsg.innerText = "Not bad, for a first timer! Enjoy your Bronze medal!";
        } else if (this.timer.secs > 0 && this.timer.secs < 30) {
          this.award = 'wood';
          awardMsg.innerText = "You got this, give it another shot! Here's a a Wood medal for now!";
        } else {
          this.award = 'wood';
          awardMsg.innerText = "Uh oh! Time's up, you got this, try again!";
        }

        ;
        timeMsg.innerText = "You finished in ".concat(this.timer.secs, " seconds!");
        timeMsg.style.color = "red";
        medal.src = "public/images/".concat(this.award, ".png");
        this.award ? endState.appendChild(medal) : null;
        this.vehicle.reset();
        this.ball.reset();
        this.timer.reset();
        this.boostBar.reset();
        this.orbs.reset();
        endGame.addEventListener('click', function (e) {
          if (e.target.className === 'start-btn') {
            endGame.classList.add('hidden');
            window.location.reload();
          }

          ;
        });
      }

      ;
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
  function GameView(game, ctx, stCtx) {
    _classCallCheck(this, GameView);

    this.game = game;
    this.vehicle = this.game.vehicle;
    this.ctx = ctx;
    this.stCtx = stCtx;
    this.animate = this.animate.bind(this);
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
        if (e.code === 'ShiftLeft') _this.vehicle.activateBoost(e);
      });
      document.addEventListener('keyup', function (e) {
        if (e.key === 'w') _this.vehicle.reduceSpeed(e);
        if (e.key === "Shift") _this.vehicle.deactivateBoost();
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      document.addEventListener('click', function (e) {
        var audio = document.getElementById('song');
        var mute = document.getElementById('mute');
        var play = document.getElementById('play');
        audio.volume = 0.1;

        if (e.target.className === 'start-btn') {
          document.querySelector('.start-game-container').classList.add('hidden');
          audio.play();

          _this2.game.loadStatic(_this2.stCtx);

          _this2.setEventListeners();

          requestAnimationFrame(_this2.animate);
        } else if (e.target.id === "mute") {
          audio.pause();
          mute.style.display = 'none';
          play.style.display = 'block';
        } else if (e.target.id === "play") {
          audio.play();
          play.style.display = 'none';
          mute.style.display = 'block';
        }

        ;
      });
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
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)); // return Math.hypot(x2-x1, y2-y1)
    }
  }, {
    key: "calcEnemyMove",
    value: function calcEnemyMove(dir) {
      if (dir === 'vert') {
        if (this.currentY > this.startPos[1] && this.currentY < this.nextY && this.moveDir) {
          this.currentY++;
        } else if (this.currentY === this.startPos[1]) {
          this.moveDir = true;
          this.currentAngle += 180;
          this.currentY++;
        } else if (this.currentY === this.nextY) {
          this.moveDir = false;
          this.currentAngle -= 180;
          this.currentY--;
        } else if (this.moveDir === false) {
          this.currentY--;
        }
      } else if (dir === 'horz') {
        if (this.currentX > this.startPos[0] && this.currentX < this.nextX && this.moveDir) {
          this.currentX++;
        } else if (this.currentX === this.startPos[0]) {
          this.moveDir = true;
          this.currentX++;
        } else if (this.currentX === this.nextX) {
          this.moveDir = false;
          this.currentX--;
        } else if (this.moveDir === false) {
          this.currentX--;
        }
      }
    }
  }, {
    key: "detectBarrier",
    value: function detectBarrier() {
      var group;
      if (this.currentY >= 1700 && this.currentY < 2000) group = this.track.group1;
      if (this.currentY >= 1300 && this.currentY < 1700) group = this.track.group2;
      if (this.currentY >= 1100 && this.currentY < 1300) group = this.track.group3;
      if (this.currentY >= 700 && this.currentY < 1100) group = this.track.group4;
      if (this.currentY >= 500 && this.currentY < 700) group = this.track.group5;

      for (tile in group) {
        var x = Number(group[tile].options.x);
        var w = Number(group[tile].options.w);
        var y = Number(group[tile].options.y);
        var dist = this.findDistance(this.currentX, this.currentY, this.currentX, y);

        if (dist <= 50) {
          if ((group === this.track.group1 || group === this.track.group3) && this.currentX >= x && this.currentX <= w) this.barrierDetected = true;
          if ((group === this.track.group2 || group === this.track.group4) && this.currentX >= x) this.barrierDetected = true; // if((group === this.track.group5) && ((this.currentX >= x) || (this.currentX >=x ))) this.barrierDetected = true;
        }
      }

      ;
    }
  }]);

  return MovingObject;
}();

module.exports = MovingObject;

/***/ }),

/***/ "./public/javascripts/orb.js":
/*!***********************************!*\
  !*** ./public/javascripts/orb.js ***!
  \***********************************/
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

var Orb = /*#__PURE__*/function (_MovingObject) {
  _inherits(Orb, _MovingObject);

  var _super = _createSuper(Orb);

  function Orb(options, vehicle, boost) {
    var _this;

    _classCallCheck(this, Orb);

    _this = _super.call(this);
    _this.x = options.x;
    _this.y = options.y;
    _this.h = options.h;
    _this.w = options.w;
    _this.vehicle = vehicle;
    _this.boost = boost;
    _this.c = 0;
    _this.active = true;
    _this.sound = document.getElementById('orb');
    _this.sound.volume = 0.5;
    return _this;
  }

  _createClass(Orb, [{
    key: "detectVehicle",
    value: function detectVehicle() {
      var dist = this.findDistance(this.x, this.y, this.vehicle.currentX, this.vehicle.currentY);

      if (this.active && dist <= 45 && this.boost.boostLevel < 294) {
        this.sound.play();
        this.boost.incrementBoost();
        this.active = false;
      }

      ;
    }
  }, {
    key: "reset",
    value: function reset() {
      var ctx = document.getElementById('static-canvas').getContext('2d');
      ctx.clearRect(0, 0, 1425, 2000);
      this.c = 0;
      this.active = true;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this2 = this;

      this.detectVehicle();
      this.c >= 4 ? this.c = 0 : this.c++;
      ctx.save();
      var orb = new Image();
      var pad = new Image();
      orb.src = "public/images/orbs/".concat(this.c, ".png");
      pad.src = "public/images/orbs/pad.png";

      if (this.active) {
        orb.onload = function () {
          ctx.clearRect(_this2.x - 35, _this2.y - 35, 100, 100);
          ctx.drawImage(orb, _this2.x, _this2.y, _this2.w, _this2.h);
        };
      } else {
        pad.onload = function () {
          ctx.drawImage(pad, _this2.x - 35, _this2.y - 35, 100, 100);
        };
      }

      ctx.restore();
    }
  }]);

  return Orb;
}(MovingObject);

;
module.exports = Orb;

/***/ }),

/***/ "./public/javascripts/orbs.js":
/*!************************************!*\
  !*** ./public/javascripts/orbs.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Orb = __webpack_require__(/*! ./orb */ "./public/javascripts/orb.js");

var Orbs = /*#__PURE__*/function () {
  function Orbs(vehicle, boost) {
    _classCallCheck(this, Orbs);

    this.orbs = [new Orb({
      x: '350',
      y: '500',
      h: '25',
      w: '25'
    }, vehicle, boost), new Orb({
      x: '1375',
      y: '650',
      h: '25',
      w: '25'
    }, vehicle, boost), new Orb({
      x: '200',
      y: '780',
      h: '25',
      w: '25'
    }, vehicle, boost), new Orb({
      x: '50',
      y: '1550',
      h: '25',
      w: '25'
    }, vehicle, boost), new Orb({
      x: '1375',
      y: '1250',
      h: '25',
      w: '25'
    }, vehicle, boost)];
  }

  _createClass(Orbs, [{
    key: "reset",
    value: function reset() {
      this.orbs.forEach(function (orb) {
        return orb.reset();
      });
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.orbs.forEach(function (orb) {
        if (orb.active) orb.draw(ctx);
      });
    }
  }]);

  return Orbs;
}();

module.exports = Orbs;

/***/ }),

/***/ "./public/javascripts/tile.js":
/*!************************************!*\
  !*** ./public/javascripts/tile.js ***!
  \************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile = /*#__PURE__*/function () {
  function Tile(options) {
    _classCallCheck(this, Tile);

    this.options = options;
  }

  _createClass(Tile, [{
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      var tile = new Image();
      tile.src = "public/images/track/tile".concat(this.options.n, ".png");
      tile.width = this.options.w;
      tile.height = this.options.h;

      tile.onload = function () {
        ctx.drawImage(tile, _this.options.x, _this.options.y, tile.width, tile.height);
      };
    }
  }]);

  return Tile;
}();

module.exports = Tile;

/***/ }),

/***/ "./public/javascripts/timer.js":
/*!*************************************!*\
  !*** ./public/javascripts/timer.js ***!
  \*************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.secs = 2;
    this.gameOver = false;
    this.timer = document.getElementById('timer');
  }

  _createClass(Timer, [{
    key: "increment",
    value: function increment() {
      if (!this.gameOver) {
        if (this.secs > 0) this.secs--;
        if (this.secs <= 60) this.timer.style.color = 'yellow';
        if (this.secs <= 10) this.timer.style.color = 'red';
        if (this.secs === 0) this.gameOver = true;
        this.timer.innerHTML = this.secs;
      }

      ;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.secs = 120;
      this.gameOver = false;
    }
  }]);

  return Timer;
}();

;
module.exports = Timer;

/***/ }),

/***/ "./public/javascripts/track.js":
/*!*************************************!*\
  !*** ./public/javascripts/track.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile = __webpack_require__(/*! ./tile */ "./public/javascripts/tile.js");

var Track = /*#__PURE__*/function () {
  function Track() {
    _classCallCheck(this, Track);

    this.group1 = {
      tile1: new Tile({
        n: '01',
        x: '0',
        y: '1750',
        h: '30',
        w: '1000'
      }),
      tile2: new Tile({
        n: '04',
        x: '1000',
        y: '1750',
        h: '30',
        w: '60'
      }),
      tile3: new Tile({
        n: '06',
        x: '1000',
        y: '1720',
        h: '30',
        w: '60'
      }),
      tile4: new Tile({
        n: '10',
        x: '0',
        y: '1720',
        h: '30',
        w: '1000'
      })
    };
    this.group2 = {
      tile1: new Tile({
        n: '01',
        x: '825',
        y: '1400',
        h: '30',
        w: '600'
      }),
      tile2: new Tile({
        n: '05',
        x: '765',
        y: '1400',
        h: '30',
        w: '60'
      }),
      tile3: new Tile({
        n: '07',
        x: '760',
        y: '1370',
        h: '30',
        w: '65'
      }),
      tile4: new Tile({
        n: '10',
        x: '820',
        y: '1370',
        h: '30',
        w: '605'
      })
    };
    this.group3 = {
      tile1: new Tile({
        n: '01',
        x: '0',
        y: '1150',
        h: '30',
        w: '350'
      }),
      tile2: new Tile({
        n: '04',
        x: '350',
        y: '1150',
        h: '30',
        w: '60'
      }),
      tile3: new Tile({
        n: '06',
        x: '350',
        y: '1120',
        h: '30',
        w: '60'
      }),
      tile4: new Tile({
        n: '10',
        x: '0',
        y: '1121',
        h: '29',
        w: '350'
      })
    };
    this.group4 = {
      tile1: new Tile({
        n: '01',
        x: '1125',
        y: '800',
        h: '30',
        w: '300'
      }),
      tile2: new Tile({
        n: '05',
        x: '1065',
        y: '800',
        h: '30',
        w: '60'
      }),
      tile3: new Tile({
        n: '07',
        x: '1060',
        y: '770',
        h: '30',
        w: '65'
      }),
      tile4: new Tile({
        n: '10',
        x: '1125',
        y: '770',
        h: '30',
        w: '300'
      })
    };
    this.group5 = {
      tile17: new Tile({
        n: '01',
        x: '650',
        y: '600',
        h: '30',
        w: '250'
      }),
      tile18: new Tile({
        n: '05',
        x: '590',
        y: '600',
        h: '30',
        w: '60'
      }),
      tile19: new Tile({
        n: '07',
        x: '585',
        y: '570',
        h: '30',
        w: '65'
      }),
      tile20: new Tile({
        n: '10',
        x: '650',
        y: '570',
        h: '30',
        w: '250'
      }),
      tile21: new Tile({
        n: '06',
        x: '900',
        y: '569',
        h: '30',
        w: '60'
      }),
      tile22: new Tile({
        n: '04',
        x: '900',
        y: '599',
        h: '30',
        w: '60'
      })
    };
  }

  _createClass(Track, [{
    key: "draw",
    value: function draw(ctx) {
      Object.values(this.group1).forEach(function (tile) {
        tile.draw(ctx);
      });
      Object.values(this.group2).forEach(function (tile) {
        tile.draw(ctx);
      });
      Object.values(this.group3).forEach(function (tile) {
        tile.draw(ctx);
      });
      Object.values(this.group3).forEach(function (tile) {
        tile.draw(ctx);
      });
      Object.values(this.group4).forEach(function (tile) {
        tile.draw(ctx);
      });
      Object.values(this.group5).forEach(function (tile) {
        tile.draw(ctx);
      });
    }
  }]);

  return Track;
}();

;
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

  function Vehicle(ball, track, boost) {
    var _this;

    _classCallCheck(this, Vehicle);

    _this = _super.call(this, ball, track);
    _this.ball = ball;
    _this.track = track;
    _this.boost = boost;
    _this.currentAngle = 0;
    _this.currentX = 50;
    _this.currentY = 1900;
    _this.speed = 0;
    _this.currentSpeed = 0;
    _this.maxSpeed = 7;
    _this.boostedSpeed = 10;
    _this.boosted = false;
    _this.barrierDetected = false;
    _this.sound = document.getElementById('rocket');
    _this.sound.volume = 0.3;
    return _this;
  }

  _createClass(Vehicle, [{
    key: "rotateVehicle",
    value: function rotateVehicle(e) {
      if (e.key === 'q') {
        if (this.currentAngle <= -360) this.currentAngle = 0;

        if (this.currentSpeed === 0) {
          this.currentAngle -= 15;
        } else {
          if (this.maxSpeed > this.currentSpeed) {
            this.speed += 0.1;
            this.currentSpeed = Math.floor(this.speed);
          }

          ;
          this.currentAngle -= 15 + this.currentSpeed;
        }

        ;
      } else if (e.key === 'e') {
        if (this.currentAngle >= 360) this.currentAngle = 0;

        if (this.currentSpeed === 0) {
          this.currentAngle += 15;
        } else {
          if (this.maxSpeed > this.currentSpeed) {
            this.speed += 0.1;
            this.currentSpeed = Math.floor(this.speed);
          }

          ;
          this.currentAngle += 15 + this.currentSpeed;
        }

        ;
      }

      ;
    }
  }, {
    key: "moveVehicle",
    value: function moveVehicle(e) {
      e.preventDefault();

      if (e.key === 'w' && this.maxSpeed > this.speed && e.type === 'keydown') {
        this.speed += 0.6;
      } else if (e.key === 's' && e.type === 'keydown') {
        this.speed -= 0.1;
      }

      ;
      this.currentSpeed = Math.floor(this.speed);
    }
  }, {
    key: "reduceSpeed",
    value: function reduceSpeed(e) {
      var _this2 = this;

      e.preventDefault();

      if (e.code === 'Space' && this.speed >= 0.4) {
        this.speed -= 0.4;
      } else if (e.key === 'w' && this.speed > 0) {
        this.speed /= 2;
        setTimeout(function () {
          _this2.speed /= 2;
          _this2.currentSpeed = Math.floor(_this2.speed);
        }, 500);
      } else if (this.speed < 0) {
        this.speed += 0.5;
      }

      ;
      this.currentSpeed = Math.floor(this.speed);
    }
  }, {
    key: "detectBall",
    value: function detectBall() {
      var x = this.currentX;
      var y = this.currentY;
      var dist = this.findDistance(x, y, this.ball.currentX, this.ball.currentY);

      if (dist <= 65) {
        this.ball.vehicleHit(this.currentAngle, this.currentSpeed);
      }

      ;
    }
  }, {
    key: "activateBoost",
    value: function activateBoost(e) {
      e.preventDefault();

      if (this.boost.boostLevel > 0) {
        this.sound.play();
        this.boosted = true;
        this.speed = this.boostedSpeed;
        this.currentSpeed = this.boostedSpeed;
      }

      ;
    }
  }, {
    key: "deactivateBoost",
    value: function deactivateBoost() {
      this.sound.pause();
      this.boosted = false;
      this.speed = 3;
      this.currentSpeed = 3;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.currentAngle = 0;
      this.currentX = 50;
      this.currentY = 1900;
      this.speed = 0;
      this.currentSpeed = 0;
      this.maxSpeed = 7;
      this.boostedSpeed = 10;
      this.boosted = false;
      this.barrierDetected = false;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this3 = this;

      this.detectBall();
      this.detectBarrier();

      if (this.barrierDetected) {
        Math.abs(this.currentAngle) < 180 ? this.currentAngle += 180 : this.currentAngle -= 180;
      }

      ;

      if (this.boost.boostLevel > 0 && this.boosted) {
        this.boost.decrementBoost();
      } else if (this.boosted) {
        this.deactivateBoost();
      }

      ;
      window.scroll(this.currentX, this.currentY - 300);
      this.barrierDetected = false;
      if (this.currentX > 1425) this.currentAngle = 180;
      if (this.currentX < 0) this.currentAngle = 360;
      if (this.currentY > 2000) this.currentAngle = 270;
      if (this.currentY < 0) this.currentAngle = 90;
      this.currentX += this.currentSpeed * Math.cos(Math.PI / 180 * this.currentAngle);
      this.currentY += this.currentSpeed * Math.sin(Math.PI / 180 * this.currentAngle);
      this.flame = new Image();
      this.flame.src = 'public/images/flame.png';
      this.flame.width = 40;
      this.flame.height = 40;
      this.vehicle = new Image();
      this.vehicle.src = "public/images/car_imgs/black_car.png";
      this.vehicle.width = 80;
      this.vehicle.height = 40;

      this.vehicle.onload = function () {
        ctx.clearRect(0, 0, 1425, 2000);
        ctx.save();
        ctx.translate(_this3.currentX, _this3.currentY);
        ctx.rotate(Math.PI / 180 * _this3.currentAngle);
        ctx.drawImage(_this3.vehicle, -(_this3.vehicle.width / 2), -(_this3.vehicle.height / 2), _this3.vehicle.width, _this3.vehicle.height);

        if (_this3.boosted) {
          ctx.drawImage(_this3.flame, -_this3.vehicle.width, -(_this3.vehicle.height / 2), _this3.flame.width, _this3.flame.height);
        }

        ;
        ctx.restore();
      };
    }
  }]);

  return Vehicle;
}(MovingObject);

;
module.exports = Vehicle;

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