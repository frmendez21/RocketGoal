const Vehicle = require('./vehicle');
const Ball = require('./ball');
const Track = require('./track');
const Goal = require('./goal');
const Orbs = require('./orbs');
const EnemyVehicle = require('./enemy_vehicle');
const BoostBar = require('./boost_bar');
class Game {
    constructor() {
        this.track = new Track;
        this.ball = new Ball(this.track);
        this.boostBar = new BoostBar;
        this.vehicle = new Vehicle(this.ball, this.track, this.boostBar);
        this.orbs = new Orbs(this.vehicle, this.boostBar);
        this.enemyVehicle = new EnemyVehicle(this.ball, this.vehicle);
        this.goal = new Goal;
    }

    loadResources(ctx) {
        this.vehicle.draw(ctx);
        this.ball.draw(ctx);
        this.enemyVehicle.draw(ctx)
        this.boostBar.draw(ctx)
    }

    loadStatic(sCtx) {
        this.track.draw(sCtx);
        this.goal.draw(sCtx);
        setInterval(() => this.orbs.draw(sCtx), 80)
    }

};

module.exports = Game;