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
        this.score = 120;
        this.award = null;
        this.endGame = false;
    };

    loadResources(ctx) {
        this.vehicle.draw(ctx);
        this.ball.draw(ctx);
        this.enemyVehicle.draw(ctx)
        this.boostBar.draw(ctx)
    };

    loadStatic(sCtx) {
        this.track.draw(sCtx);
        this.goal.draw(sCtx);
        let tInt = setInterval(() => {
            this.restart = false;
            this.timer.increment();
            if(this.timer.gameOver) {
                this.timer.secs > 0 ? this.score = this.timer.secs : null;
                this.endGame = true;
                clearInterval(tInt)
                clearInterval(oInt)
                this.gameOver();
            };
        }, 1000);
        let oInt = setInterval(() => this.orbs.draw(sCtx), 80);
    };

    gameOver() {
        if(this.endGame) {
            const endGame = document.getElementById('end-game-container');
            const awardMsg = document.getElementById('award-message');
            const timeMsg = document.getElementById('time-message');
            const endState = document.querySelector('.end-game-stats');
            const oldMedal = document.getElementById('medal');

            oldMedal ? oldMedal.remove() : null;
            const medal = document.createElement('img');
            medal.id = "medal";

            endGame.classList.remove('hidden');

            if(this.timer.secs >= 90 && this.timer.secs < 120) {
                this.award = 'gold';
                awardMsg.innerText = 'You crushed it! You deserve this Gold medal!';
            } else if(this.timer.secs >= 60 && this.timer.secs < 90) {
                this.award = 'silver';
                awardMsg.innerText = "Whooo that was quick! Here's your Silver medal!"
            } else if(this.timer.secs >= 30 && this.timer.secs < 60) {
                this.award = 'bronze';
                awardMsg.innerText = "Not bad, for a first timer! Enjoy your Bronze medal!"
            }  else if(this.timer.secs > 0 && this.timer.secs < 30){
                 awardMsg.innerText = "Oh no! No medal awarded with less than 30 seconds on the clock! Gold < 30, Silver < 60, Bronze < 90  "
            }else {
                awardMsg.innerText = "Uh oh! Time's up, you got this, try again!  Gold < 30, Silver < 60, Bronze < 90 ";
            };

            timeMsg.innerText = `You finished in ${120 - this.timer.secs} seconds!`
            timeMsg.style.color = "red";

            medal.src = `public/images/${this.award}.png`;

            this.award ? endState.appendChild(medal) : null;

            this.vehicle.reset();
            this.ball.reset();
            this.timer.reset();
            this.boostBar.reset();
            this.orbs.reset();

            endGame.addEventListener('click', e => {
                if(e.target.className === 'start-btn') {
                    endGame.classList.add('hidden');
                    window.location.reload();
                };
            });
        };
    };
};

module.exports = Game;