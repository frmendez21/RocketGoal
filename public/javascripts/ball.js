const MovingObject = require("./moving_objects");

class Ball extends MovingObject{
    constructor() {
        super()
        this.currentX = 300;
        this.currentY = 950;
        this.curentPos = [this.currentX, this.currentY];
        this.velocity = 60;
        this.currentSpeed = 1;

        this.calcNextPos = this.calcNextPos.bind(this)
    }

    vehicleHit(angle, speed) {
        switch (angle) {
            case 270:
                 this.calcNextPos([(this.currentX + (speed * this.velocity)), this.currentY], speed, 'right')
                break;
            case 90: 
                this.calcNextPos([(this.currentX - (speed * this.velocity)), this.currentY], speed, 'left')
                break;
            case 180: 
                this.calcNextPos([this.currentX, (this.currentY + (speed * this.velocity))], speed, 'down')
                break;
            case 360: case 0: 
                this.calcNextPos([this.currentX, (this.currentY - (speed * this.velocity))], speed, 'up')
                break;
            default:
                break;
        }
    }

    calcNextPos(nextPos, speed, dir) {
        let c = 0;
        let int = setInterval(() => {
            if(c > 2){
                clearInterval(int)
                c = 0; 
                this.currentX = this.currentX
            } 
            if(nextPos[0] >= this.currentX && dir === 'right') this.currentX += speed;
            if(nextPos[0] < this.currentX && dir === 'left') this.currentX -= speed;
            if(nextPos[1] > this.currentY && dir === 'down') this.currentY += speed;
            if(nextPos[1] < this.currentY && dir === 'up') this.currentY -= speed;
            c ++;
        }, 60)
    }

    draw(ctx) {
        ctx.save();
        this.ball = new Image();
        this.ball.onload = () => {
            ctx.drawImage(this.ball, this.currentX, this.currentY, -(this.ball.width / 10), -(this.ball.height / 10))
        }
        this.ball.src = '/public/images/soccer_ball.png';
        ctx.restore();
    }
}
module.exports = Ball;

