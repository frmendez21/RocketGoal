const MovingObject = require("./moving_objects");

class Vehicle extends MovingObject{
    constructor(ball, track, boost) {
        super(ball, track)
        this.ball = ball;
        this.track = track;
        this.boost = boost;
        this.currentAngle = 0;
        this.currentX = 50;
        this.currentY = 1900;
        this.speed = 0;
        this.currentSpeed = 0;
        this.maxSpeed = 6;
        this.boostedSpeed = 10;
        this.boosted = false;
        this.barrierDetected = false;
        this.barrierDist = 0;
        this.sound = document.getElementById('rocket');
        this.sound.volume = 0.3;
    };

    rotateVehicle(e) {
        if(e.key === 'ArrowLeft') {
            if(this.currentAngle <= -360) this.currentAngle = 0;
            if(this.currentSpeed === 0) {
                this.currentAngle -= 15;
            } else {
                this.currentAngle -= 30;
            };
        } else if(e.key === 'ArrowRight') {
             if(this.currentAngle >= 360) this.currentAngle = 0;
             if(this.currentSpeed === 0) {
                 this.currentAngle += 15 ;
             } else {
                 this.currentAngle += 30;
             };
        };
    };

    moveVehicle(e) {
        e.preventDefault();
        if(e.key === 'ArrowUp' && (this.maxSpeed > this.speed && e.type === 'keydown')) {
            this.speed += 0.6;
        } else if(( e.key === 'ArrowDown' && e.type === 'keydown')) {
            this.speed -= 0.1;
        };
        this.currentSpeed = Math.floor(this.speed);
    };

    reduceSpeed(e) {
        if(e.code === 'Space' && this.speed >= 0.4) {
            this.speed -= 0.4;
        } else if((e.key === 'ArrowUp') && this.speed > 0){
            this.speed /= 2;
            setTimeout(() => {
                this.speed /=2;
                 this.currentSpeed = Math.floor(this.speed)
            }, 500)
        } else if((e.key === "Shift" && this.speed > 0) && this.boosted){
            this.sound.pause()
            this.boosted = false;
            this.speed = 3;
        } else if(this.speed < 0) {
            this.speed += 0.5;
        };
        this.currentSpeed = Math.floor(this.speed)
    };


    detectBall() {
       let x = this.currentX;
       let y = this.currentY;
       let dist = this.findDistance(x, y, this.ball.currentX, this.ball.currentY)

       if(dist <= 65 && this.boosted) {
          this.ball.vehicleHit(this.currentAngle, this.maxSpeed);
        } else if(dist <= 65) {
          this.ball.vehicleHit(this.currentAngle, this.currentSpeed);
        }
    };

    activateBoost(e) {
        e.preventDefault()
        if(this.boost.boostLevel > 0) {
            this.sound.play();
            this.boosted = true;
            this.speed = this.boostedSpeed;
            this.currentSpeed = this.boostedSpeed;
        };
    };

    deactivateBoost() {
        this.sound.pause()
        this.boosted = false;
        this.speed = 3;
        this.currentSpeed = 3;
    };

    reset() {
        this.currentAngle = 0;
        this.currentX = 50;
        this.currentY = 1900;
        this.speed = 0;
        this.currentSpeed = 0;
        this.maxSpeed = 7;
        this.boostedSpeed = 10;
        this.boosted = false;
        this.barrierDetected = false;
    }
    
    draw(ctx) {
        this.detectBall();
        this.detectBarrier();
        if(this.barrierDetected) {
            Math.abs(this.currentAngle) < 180 ? this.currentAngle += 180 : this.currentAngle -= 180;
        };
        
        if(this.boost.boostLevel > 0 && this.boosted) {
            this.boost.decrementBoost();
        } else if(this.boosted) {
            this.deactivateBoost()
        };

        window.scroll(this.currentX, (this.currentY - 300))
        
        this.barrierDetected = false;
        if(this.currentX > 1425) this.currentAngle = 180;
        if(this.currentX < 0) this.currentAngle = 360;
        if(this.currentY > 2000) this.currentAngle = 270;
        if(this.currentY < 0) this.currentAngle = 90;

        this.currentX += (this.currentSpeed * Math.cos(Math.PI/180 * this.currentAngle));
        this.currentY += (this.currentSpeed * Math.sin(Math.PI/180 * this.currentAngle));
        
        this.flame = new Image();
        this.flame.src = 'public/images/flame.png';
        this.flame.width = 40;
        this.flame.height = 40;

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
            if(this.boosted) {
                ctx.drawImage(this.flame, -(this.vehicle.width), -(this.vehicle.height / 2), this.flame.width, this.flame.height)
            };
            ctx.restore();
        };
    };
};

module.exports = Vehicle;
