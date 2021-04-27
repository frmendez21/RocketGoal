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

    draw(ctx) {
       

       document.addEventListener('keydown', e => {
            if(e.key === 'e') {
                this.vehicle.rotateRight();
            }
        })
       document.addEventListener('keydown', e => {
            if(e.key === 'q') {
                this.vehicle.rotateLeft();
            }
        })

        document.addEventListener('keydown', e => {
            // console.log(e)
            if(e.key === 'w') {
                this.vehicle.moveForward();
            }
        })

        document.addEventListener('keydown', e => {
            if(e.key === 's') {
                this.vehicle.moveBackward();
            }
        })

        setInterval(() => {
            ctx.clearRect(0, 0, 800, 800);
            ctx.fillStyle = 'gray';
            ctx.fillRect(0, 0, 1000, 700)
            this.loadResources(ctx);
        }, 60)
    }
};

module.exports = Game;