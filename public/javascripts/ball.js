class Ball {
    constructor() {
        this.currentX = 100;
        this.currentY = 910;
        this.curentPos = [this.currentX, this.currentY];
        this.velocity = 20;
        this.maxVelocity = 10;
   
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