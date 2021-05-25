const Vehicle = require('./vehicle');

class Enemy extends Vehicle {
    constructor(options, ball, player) {
        super(ball)
        this.options = options;
        this.startPos = [options.x, options.y]
        this.currentX = options.x
        this.currentY = options.y
        this.currentAngle = options.a;
        this.ball = ball;
        this.player = player;
        this.nextX = this.currentX + 200;
        this.nextY = this.currentY + 200;
        this.currentSpeed = 5;
        this.moveDir = true;
    };

   detectBall() {
       let dist = this.findDistance(this.currentX, this.currentY, this.ball.currentX, this.ball.currentY)
       if(dist <= 70) {
            this.ball.vehicleHit(this.currentAngle, this.currentSpeed)
       };

   }

   detectPlayer() {
       let dist = this.findDistance(this.currentX, this.currentY, this.player.currentX, this.player.currentY)
       if(dist < 60) {
            this.player.health -= 10;
       }
   }

   draw(ctx, dir) {
       this.detectBall()
       this.detectPlayer()
       this.calcEnemyMove(dir)
       this.vehicle = new Image();
       this.vehicle.src = `public/images/car_imgs/${this.options.c}_car.png`;
       this.vehicle.width = this.options.w;
       this.vehicle.height = this.options.h;
       this.vehicle.onload = () => {
           ctx.save()
           ctx.translate(this.currentX, this.currentY);
           ctx.rotate(Math.PI/180 * this.currentAngle);
           ctx.drawImage(this.vehicle, -(this.vehicle.width / 2), -(this.vehicle.height / 2), this.vehicle.width, this.vehicle.height)
           ctx.restore()
       };
   };

};

module.exports = Enemy;