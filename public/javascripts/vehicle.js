const MovingObject = require("./moving_objects");

class Vehicle extends MovingObject{
    constructor(ball) {
        super(ball)
        this.ball = ball;
        this.health = 100;
        this.currentAngle = 0;
        this.currentX = 50;
        this.currentY = 1900;
        this.speed = 0;
        this.currentSpeed = 0;
        this.maxSpeed = 7;
        this.boostedSpeed = 8;
        this.ballDistance = 0; 
        this.orbDetected = false;

    };

    
    rotateVehicle(e) {
        if(e.key === 'q') {
            if(this.currentAngle <= -360) this.currentAngle = 0;
            if(this.currentSpeed === 0) {
                this.currentAngle -= 15;
            } else {
                if(this.maxSpeed > this.currentSpeed) {
                    this.speed += 0.1;
                    this.currentSpeed = Math.floor(this.speed);
                } 
                this.currentAngle -= (15 + this.currentSpeed);
            }
        } else if(e.key === 'e') {
             if(this.currentAngle >= 360) this.currentAngle = 0;
             if(this.currentSpeed === 0) {
                 this.currentAngle += 15 ;
             } else {
                 if(this.maxSpeed > this.currentSpeed) {
                     this.speed += 0.1;
                     this.currentSpeed = Math.floor(this.speed);
                 };
                 this.currentAngle += (15 + this.currentSpeed);
             }
        }
    }

    moveVehicle(e) {
        e.preventDefault();
        if(e.key === 'w' && (this.maxSpeed > this.speed && e.type === 'keydown')) {
            this.speed += 0.6;
        } else if(( e.key === 's' && e.type === 'keydown')) {
            this.speed -= 0.1;
        }
        this.currentSpeed = Math.floor(this.speed);
    }

    detectBall() {
       let x = this.currentX;
       let y = this.currentY;
       this.ballDistance = this.findDistance(x, y, this.ball.currentX, this.ball.currentY)

       if(this.ballDistance <= 65) {
          this.ball.vehicleHit(this.currentAngle, this.currentSpeed);
        }
    }
   
    reduceSpeed(e) {
        e.preventDefault(); 
        if(e.code === 'Space' && this.speed >= 0.4) {
            this.speed -= 0.5;
        } else if(e.key === 'w' && this.speed > 0){
            this.speed /= 2;
            setTimeout(() => {
                this.speed /=2;
                 this.currentSpeed = Math.floor(this.speed)
            }, 500)
        } else if(this.speed < 0) {
            this.speed += 0.5;
        };
        this.currentSpeed = Math.floor(this.speed)
    };

    calcEnemyMove(dir) {
    if(dir === 'vert'){
        if((this.currentY > this.startPos[1] && this.currentY < this.nextY ) && this.moveDir) {
            this.currentY ++;
        } else if (this.currentY === this.startPos[1]) {
            this.moveDir = true;
            this.currentAngle += 180;
            this.currentY ++;
        } else if(this.currentY === this.nextY) {
            this.moveDir = false;
            this.currentAngle -= 180
            this.currentY --;
        } else if(this.moveDir === false) {
            this.currentY --;
        }
    } else if(dir === 'horz') {
        if((this.currentX > this.startPos[0] && this.currentX < this.nextX ) && this.moveDir) {
            this.currentX ++;
        } else if (this.currentX === this.startPos[0]) {
            this.moveDir = true;
            this.currentX ++;
        } else if(this.currentX === this.nextX) {
            this.moveDir = false;
            this.currentX --;
        } else if(this.moveDir === false) {
            this.currentX --;
        }
    }
   };
 
    draw(ctx) {
        this.detectBall();

        // window.scroll(this.currentX, this.currentY / 2)
        if(this.currentX > 1425) this.currentAngle = 180;
        if(this.currentX < 0) this.currentAngle = 360;
        if(this.currentY > 2000) this.currentAngle = 270;
        if(this.currentY < 0) this.currentAngle = 90;
        this.currentX += (this.currentSpeed * Math.cos(Math.PI/180 * this.currentAngle))
        this.currentY += (this.currentSpeed * Math.sin(Math.PI/180 * this.currentAngle))
        
        this.vehicle = new Image();
        this.vehicle.src = `public/images/car_imgs/black_car.png`;
        this.vehicle.width = 80;
        this.vehicle.height = 40;
        this.vehicle.onload = () => {
            ctx.clearRect(0, 0, 1425, 2000)
            ctx.save();
            ctx.translate(this.currentX, this.currentY);
            ctx.rotate(Math.PI/180 * this.currentAngle)
            ctx.drawImage(this.vehicle, -(this.vehicle.width / 2), -(this.vehicle.height / 2), this.vehicle.width, this.vehicle.height);
            ctx.restore();
        }
        
        
    };
};

module.exports = Vehicle;
