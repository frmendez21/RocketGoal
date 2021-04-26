const Vehicle = require('./vehicle');
const Ball = require('./ball');

class Game {
    constructor() {
        this.vehicle = new Vehicle;
        this.ball = new Ball;
    }

    draw(ctx) {
       ctx.clearRect(0, 0, 800, 800);
       ctx.fillStyle = 'gray';
       ctx.fillRect(0, 0, 1000, 700)
       
       this.vehicle.draw(ctx);
       this.ball.draw(ctx);
    }
};

module.exports = Game;