const Vehicle = require('./vehicle');
const Ball = require('./ball');
const Track = require('./track');
const Walls = require('./walls');
const Goal = require('./goal');
const BlueOrbs = require('./blue_orbs');
const EnemyVehicle = require('./enemy_vehicle');

class Game {
    constructor() {
        this.walls = new Walls;
        this.track = new Track;
        this.ball = new Ball(this.track);
        this.orb = new BlueOrbs;
        this.vehicle = new Vehicle(this.ball, this.orb);
        this.enemyVehicle = new EnemyVehicle(this.ball, this.vehicle);
        this.goal = new Goal;
    }

    loadResources(ctx) {
        this.vehicle.draw(ctx);
        this.ball.draw(ctx);
        this.enemyVehicle.draw(ctx)
    }

    loadStatic(sCtx) {
        this.walls.draw(sCtx);
        this.track.draw(sCtx);
        this.goal.draw(sCtx);
        setInterval(() => this.orb.draw(sCtx), 80)
        
    }

};

module.exports = Game;