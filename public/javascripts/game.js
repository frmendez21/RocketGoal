const Vehicle = require('./vehicle');
const Ball = require('./ball');
const Track = require('./track');
const Goal = require('./goal');
const Orbs = require('./orbs');
const EnemyVehicle = require('./enemy_vehicle');
const BoostBar = require('./boost_bar');
const Timer = require('./timer');

class Game {
    constructor() {
        this.track = new Track;
        this.timer = new Timer;
        this.ball = new Ball(this.track, this.timer);
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
        setInterval(() => {
            this.timer.increment();
            if(this.timer.gameOver) this.gameOver();
        }, 1000);
        setInterval(() => this.orbs.draw(sCtx), 80)
    }

    gameOver() {
        if(this.timer.gameOver) {
            const endGame = document.getElementById('end-game-container');
            // const endGame = document.querySelector('.start-game-container')
            endGame.classList.remove('hidden');
            endGame.addEventListener('click', e => {
                if(e.target.className === 'start-btn') {
                    endGame.classList.add('hidden');
                    this.vehicle.reset();
                    this.ball.reset();
                    this.timer.reset();
                    this.boostBar.reset();
                    this.orbs.reset();
                }
            })
        }
    }

};

module.exports = Game;