const Vehicle = require('./vehicle');
const Ball = require('./ball');
const Track = require('./track');
const Walls = require('./walls');
const Goal = require('./goal');
const BlueOrbs = require('./blue_orbs');

class Game {
    constructor() {
        this.walls = new Walls;
        this.track = new Track;
        this.ball = new Ball(this.track);
        this.vehicle = new Vehicle(this.ball);
        this.goal = new Goal;
        this.orb = new BlueOrbs;
    }

    loadResources(ctx) {
        this.vehicle.draw(ctx);
        this.ball.draw(ctx);
        
    }

    loadStatic(sCtx) {
        this.walls.draw(sCtx);
        this.track.draw(sCtx);
        this.goal.draw(sCtx);
        setInterval(() => this.orb.draw(sCtx), 80)
        
    }

};

module.exports = Game;