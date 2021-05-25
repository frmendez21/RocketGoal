const MovingObject = require("./moving_objects");

class Ball extends MovingObject{
    constructor(track) {
        super()
        this.currentX = 700;
        this.currentY = 400;
        this.curentPos = [this.currentX, this.currentY];
        this.velocity = 60;
        this.currentSpeed = 0;
        this.currentAngle = 0;
        this.track = track;
        this.trackCollision = false;
        this.withinBounds = true;
        // this.calcNextPos = this.calcNextPos.bind(this)
        this.impact =  document.getElementById('impact');
    }

    detectGoal() {
        if((this.currentX >= 650 && this.currentX <= 800 ) && this.currentY <= 120) {
            let endGame = document.getElementById('end-game-container');
            // endGame.classList.remove('hidden');

        }
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
        this.currentAngle = angle;
        this.currentSpeed = (speed * 2);
        setTimeout(() => this.currentSpeed = 0, 300)
        this.impact.play()
    }
    

    draw(ctx) {
        this.detectGoal();
        // this.detectTrack()
        this.currentX += (this.currentSpeed * Math.cos(Math.PI/180 * this.currentAngle))
        this.currentY += (this.currentSpeed * Math.sin(Math.PI/180 * this.currentAngle))
        
        this.ball = new Image();
        this.ball.src = 'public/images/soccer_ball.png';
        this.ball.width = 50;
        this.ball.height = 50;
        this.ball.onload = () => {
            ctx.save();
            ctx.translate(this.currentX, this.currentY)
            ctx.rotate(Math.PI/180 * this.currentAngle)
            ctx.drawImage(this.ball, -(this.ball.width / 2), -(this.ball.height / 2), this.ball.width, this.ball.height)
            ctx.restore();
        }
        
    }
}
module.exports = Ball;

