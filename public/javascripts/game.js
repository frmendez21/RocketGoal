const Vehicle = require('./vehicle');
const Ball = require('./ball');

class Game {
    constructor() {
        this.ball = new Ball;
        this.vehicle = new Vehicle(this.ball);
    }

    loadResources(ctx) {
        this.vehicle.draw(ctx);
        this.ball.draw(ctx);
    }

    draw(bgCtx) {
        bgCtx.fillStyle = 'black'
        bgCtx.fillRect(0, 0, 1000, 700)
    }
};

module.exports = Game;