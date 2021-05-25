const Vehicle = require('./vehicle');

class EnemyGoalie extends Vehicle {
    constructor(pos, ball) {
        super(pos, ball)
        this.ball = ball;
        this.startPos = pos;
        this.currentX = pos[0];
        this.currentY = pos[1];
        this.nextX = this.currentX + 150;
        this.currentAngle = 90;
        this.currentSpeed = 10;
        this.moveDir = true;
    }

    

    draw(ctx, dir) {
        this.detectBall()
        this.calcEnemyMove(dir)
        this.vehicle = new Image();
        this.vehicle.src = 'public/images/car_imgs/red_car.png';
        this.vehicle.width = 80;
        this.vehicle.height = 50;
        this.vehicle.onload = () => {
        
            ctx.save()
            ctx.translate(this.currentX, this.currentY);
            ctx.rotate(Math.PI/180 * this.currentAngle)
            ctx.drawImage(this.vehicle, -(this.vehicle.width / 2), -(this.vehicle.height / 2), this.vehicle.width, this.vehicle.height)
            ctx.restore()
        };
    };
}

module.exports = EnemyGoalie;