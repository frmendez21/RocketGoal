const MovingObject = require("./moving_objects");

class Ball extends MovingObject{
    constructor(track, timer) {
        super()
        this.track = track;
        this.timer = timer;
        this.currentX = 500;
        this.currentY = 1900;
        this.velocity = 0;
        this.currentAngle = 0;
        this.barrierDetected = false;
        this.goalDetected = false;
        this.impact =  document.getElementById('impact');
        this.impact.volume = 0.3;
    };

    vehicleHit(angle, speed) {
        clearTimeout(this.vehicleHit, 100);
        this.impact.play();
        this.currentAngle = angle;
        this.velocity = (speed * 2);
        setTimeout(() => this.velocity = 0, speed * 100)
    };
    
    detectBounds() {
        if(this.currentX >= 1425) {
            this.currentAngle = 180;
            this.currentX -= (this.velocity + 1);
            this.impact.play();
        } else if(this.currentX <= 0) {
            this.currentAngle = 0;
            this.currentX += (this.velocity + 1);
            this.impact.play();
        } else if(this.currentY > 2000) {
            this.currentAngle = 270;
            this.currentY -= (this.velocity + 1);
            this.impact.play();
        } else if(this.currentY < 0) {
            this.currentAngle = 90;
            this.currentY += (this.velocity + 1);
            this.impact.play();
        };
    };

    detectGoal() {
        if((this.currentX >= 620 && this.currentX <= 800) && this.currentY <= 20) {
            this.timer.gameOver = true;
        }
    };

    reset() {
        this.currentX = 500;
        this.currentY = 1900;
        this.velocity = 0;
        this.currentAngle = 0;
        this.barrierDetected = false;
        this.goalDetected = false;
    };

    draw(ctx) {
        this.detectGoal();
        this.detectBarrier(); 

        if(this.barrierDetected) {
            if(Math.abs(this.currentAngle) < 180) {
                this.currentAngle += 180;
                this.currentY += (this.velocity + 2);
            } else {
                this.currentAngle -= 180;
                this.currentY -= (this.velocity + 2);
            };
        };

        this.barrierDetected = false;
        this.detectBounds();
        this.currentX += (this.velocity * Math.cos(Math.PI/180 * this.currentAngle));
        this.currentY += (this.velocity * Math.sin(Math.PI/180 * this.currentAngle));
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
        };
    };
};
module.exports = Ball;

