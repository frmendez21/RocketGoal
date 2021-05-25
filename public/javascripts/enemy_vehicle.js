const Vehicle = require('./vehicle');

class EnemyVehicle extends Vehicle {
    constructor(ball) {
        super(ball)
        this.ball = ball;
        this.currentX = 640;
        this.currentY = 150;
        this.currentDir = 180;
        this.currentSpeed = 7;
        this.moveRight = true;
    }
    calcNextPos() {
        if((this.currentX > 640 && this.currentX < 800) && this.moveRight === true) {
            this.currentX += 1
        } else if(this.currentX === 800) {
            this.moveRight = false;
            this.currentX -=1;
        } else if(this.currentX === 640){
            this.moveRight = true;
            this.currentX += 1;
        }else if(this.moveRight === false) {
            this.currentX -= 1;
        }
    }

    draw(ctx) {
        this.detectBall()
        this.calcNextPos()
        // ctx.save()
        this.vehicle = new Image();
        this.vehicle.onload = () => {
            ctx.drawImage(this.vehicle, this.currentX, this.currentY,  -(this.vehicle.width / 4), -(this.vehicle.height / 4))
        }
        this.vehicle.src = 'public/images/car_imgs/red_car.png'
        // ctx.restore()
    }
}

module.exports = EnemyVehicle;