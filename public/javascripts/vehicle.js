const MovingObject = require("./moving_objects");

class Vehicle extends MovingObject{
    constructor(ball, track) {
        super(ball, track)
        this.ball = ball;
        this.track = track;
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
        this.barrierDetected = false;
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


    detectBarrier() {
        let group;
        if(this.currentY >= 1700 && this.currentY < 2000) group = this.track.group1;
        if(this.currentY >= 1300 && this.currentY < 1700) group = this.track.group2;
        if(this.currentY >= 1100 && this.currentY < 1300) group = this.track.group3;
        if(this.currentY >= 700 && this.currentY < 1100) group = this.track.group4;
        if(this.currentY >= 500 && this.currentY < 700) group = this.track.group5;
        for(tile in group) {
            let x = Number(group[tile].options.x)
            let w = Number(group[tile].options.w)
            let y = Number(group[tile].options.y)
            let dist = this.findDistance(this.currentX, this.currentY, this.currentX, y);

            if(dist <= 50) {
                if((group === this.track.group1 || group === this.track.group3) && (this.currentX >= x && this.currentX <= w)) this.barrierDetected = true;
                if((group === this.track.group2 || group === this.track.group4) && (this.currentX >= x)) this.barrierDetected = true;
                // if((group === this.track.group5) && ((this.currentX >= x) || (this.currentX >=x ))) this.barrierDetected = true;
            }
        };
    };
    
   
    reduceSpeed(e) {
        e.preventDefault(); 
        if(e.code === 'Space' && this.speed >= 0.4) {
            this.speed -= 0.4;
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

   
 
    draw(ctx) {
        this.detectBall();
        this.detectBarrier();
        if(this.barrierDetected) {
            Math.abs(this.currentAngle) < 180 ? this.currentAngle += 180 : this.currentAngle -= 180;
        };
        this.barrierDetected = false;
        // window.scroll(this.currentX, (this.currentY))
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
