const Vehicle = require('./vehicle');
const Ball = require('./ball');
const Track = require('./track');
const Walls = require('./walls');
const Goal = require('./goal');

class Game {
    constructor() {
        this.ball = new Ball;
        this.vehicle = new Vehicle(this.ball);
        this.walls = new Walls;
        this.track = new Track;
        this.goal = new Goal;
    }

    loadResources(ctx) {
        this.vehicle.draw(ctx);
        this.ball.draw(ctx);
    }

    loadStatic(sCtx) {
        this.walls.draw(sCtx);
        this.track.draw(sCtx);
        this.goal.draw(sCtx);
    }

};

module.exports = Game;