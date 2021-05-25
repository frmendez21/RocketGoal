const MovingObject = require("./moving_objects");

class Ball extends MovingObject{
    constructor(track) {
        super()
        this.track = track;
        this.currentX = 500;
        this.currentY = 550;
        this.velocity = 0;
        this.currentAngle = 0;
        this.impact =  document.getElementById('impact');
        this.impact.volume = 0.3;
    }

    vehicleHit(angle, speed) {
        clearTimeout(this.vehicleHit, 100)
        if(speed !== 0) this.impact.play()
        this.currentAngle = angle;
        this.velocity = (speed * 2);
        setTimeout(() => this.velocity = 0, speed * 100)
    }
    
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
    }

    draw(ctx) {
        // this.detectGoal();
        // this.detectTrack()
        
        this.detectBounds();
        this.currentX += (this.velocity * Math.cos(Math.PI/180 * this.currentAngle))
        this.currentY += (this.velocity * Math.sin(Math.PI/180 * this.currentAngle))
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

