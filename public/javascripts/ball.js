class Ball {
    draw(ctx) {
        this.ball = new Image();
        this.ball.onload = () => {
            ctx.drawImage(this.ball, 100, 600, 40, 40)
        }
        this.ball.src = '/public/images/soccer_ball.png';
    }
}
module.exports = Ball;