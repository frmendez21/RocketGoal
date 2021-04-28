class Ball {
    constructor() {
        this.currentX = 100;
        this.currentY = 600;
        this.curentPos = [this.currentX, this.currentY];
        this.velocity = 20;
        this.maxVelocity = 10;
        this.detectCollision = this.detectCollision.bind(this)
    }

    detectCollision(angle) {
        if (angle === 270) {
            this.currentX += this.velocity
        } else if(angle === 90) {
            this.currentX -= this.velocity;
        } else if (angle === 180) {
            this.currentY += this.velocity 
        } else if (angle === 0 || angle === 360) {
            this.currentY -= this.velocity;
        }
    }

    draw(ctx) {
        ctx.save();
        this.ball = new Image();
        this.ball.onload = () => {
            ctx.drawImage(this.ball, this.currentX, this.currentY, 40, 40)
        }
        this.ball.src = '/public/images/soccer_ball.png';
        ctx.restore();
    }
}
module.exports = Ball;