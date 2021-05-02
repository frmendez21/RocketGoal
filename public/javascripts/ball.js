const MovingObject = require("./moving_objects");

class Ball extends MovingObject{
    constructor(track) {
        super()
        this.currentX = 300;
        this.currentY = 950;
        this.curentPos = [this.currentX, this.currentY];
        this.velocity = 60;
        this.currentSpeed = 1;
        this.track = track;
        this.trackCollision = false;
        this.withinBounds = true;
        this.calcNextPos = this.calcNextPos.bind(this)
    }

    detectTrack() {
       let distance = 0;
       if(this.currentX < 1250 && (this.currentY <= 950 && this.currentY >= 880)) {
           distance = this.findDistance(this.currentX, this.currentY, this.currentX, 875)
       } else if (this.currentY > 950 && this.currentY <= 1000) {
           distance = this.findDistance(this.currentX, this.currentY, this.currentX, 990)
       } else if(this.currentX >= 1400 && (this.currentY >= 725)){
            distance = this.findDistance(this.currentX, this.currentY, 1400, this.currentY)
       }else {
           distance = 100;
       }
       distance < 50 ? this.trackCollision = true : this.trackCollision = false;
       distance >= 50 ? this.withinBounds = true : this.withinBounds = false;
    }

    vehicleHit(angle, speed) {
        if(this.trackCollision && (angle === 360 || angle === 0)){
            angle = 180;
        } else if(this.trackCollision && (angle === 180)){
            angle = 360;
        } else if(this.trackCollision && (angle === 270)) {
            angle = 90;
        }
        
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
            if(this.currentX >= 1425) speed -= (speed + 1);
            if(this.currentX <= 50) speed -= (speed * 2 + 1)
            if(nextPos[0] >= this.currentX && dir === 'right') this.currentX += speed;
            if(nextPos[0] < this.currentX && dir === 'left') this.currentX -= speed;
            if(nextPos[1] > this.currentY && dir === 'down') this.currentY += speed;
            if(nextPos[1] < this.currentY && dir === 'up') this.currentY -= speed;

            c ++;
        }, 60)
    }

    draw(ctx) {
        this.detectTrack()
        ctx.save();
        this.ball = new Image();
        this.ball.onload = () => {
            ctx.drawImage(this.ball, this.currentX, this.currentY, -(this.ball.width / 10), -(this.ball.height / 10))
        }
        this.ball.src = 'public/images/soccer_ball.png';
        ctx.restore();
    }
}
module.exports = Ball;

