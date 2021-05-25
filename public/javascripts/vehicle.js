const MovingObject = require("./moving_objects");

class Vehicle extends MovingObject{
    constructor(ball, orb) {
        super(ball)
    
        this.ball = ball;
        this.orb = orb;
        this.currentAngle = 0;
        // this.currentX = 75;
        // this.currentY = 950;
        this.currentX = 550;
        this.currentY = 400;
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
            if(this.maxSpeed > this.currentSpeed) this.currentSpeed += 0.1;
            this.currentAngle -= (5 + this.currentSpeed);
        } else if(e.key === 'e') {
             if(this.currentAngle >= 360) this.currentAngle = 0;
             if(this.maxSpeed > this.currentSpeed) this.currentSpeed += 0.1;
            this.currentAngle += (5 + this.currentSpeed);
        }
    }

    moveVehicle(e) {
        if(e.key === 'w' && (this.maxSpeed > this.speed && e.type === 'keydown')) {
            this.speed += 0.4;
        } else if( e.key === 's' && e.type === 'keydown') {
            this.speed -= 0.1;
        }
        this.currentSpeed = Math.floor(this.speed);
    }

    detectBall() {
       let x = this.currentX;
       let y = this.currentY
       this.ballDistance = this.findDistance(x, y, this.ball.currentX, this.ball.currentY)

       if(this.ballDistance <= 65) {
          this.ball.vehicleHit(this.currentAngle, this.currentSpeed);
        }
    }

    
   
    reduceSpeed(e) {
        e.preventDefault(); 
        if(e.code === 'Space' && this.speed >= 0.4) {
            this.speed -= 0.4;
        } else if(e.key === 'w' && this.speed > 0){
            this.speed -= ((this.speed / 2));
        } else if(this.speed < 0) {
            this.speed += 0.4;
        }
        this.currentSpeed = Math.floor(this.speed)
    
    }

    testFunc() {
        console.log(this.currentX)
        console.log(this.ball.currentX)
        console.log(this.ballDistance)
    }


    detectOrb () {

        for(let i = 0; i < this.orb.xPos.length; i++) {
            let orbDistance = this.findDistance(this.currentX, this.currentY, this.orb.xPos[i], this.orb.yPos[i])
            if(orbDistance <= 60) {
                this.orbDetected = true;
                setTimeout(() => this.orbDetected = false, 5000)
            }
        }
    }
 
    draw(ctx) {
        this.detectBall();
        // this.detectOrb();
        // window.scroll(this.currentX, this.currentY / 2)
        if(this.currentX > 1425) this.currentAngle = 180;
        if(this.currentX < 0) this.currentAngle = 360;
        if(this.currentY > 1000) this.currentAngle = 270;
        if(this.currentY < 0) this.currentAngle = 90;
        this.currentX += (this.currentSpeed * Math.cos(Math.PI/180 * this.currentAngle))
        this.currentY += (this.currentSpeed * Math.sin(Math.PI/180 * this.currentAngle))
        
        this.vehicle = new Image();
        this.vehicle.src = `public/images/car_imgs/270.png`;
        this.vehicle.width = 80;
        this.vehicle.height = 40;
        this.vehicle.onload = () => {
            ctx.clearRect(0, 0, 1425, 1000)
            ctx.save();
            ctx.translate(this.currentX, this.currentY);
            ctx.rotate(Math.PI/180 * this.currentAngle)
            ctx.drawImage(this.vehicle, -(this.vehicle.width / 2), -(this.vehicle.height / 2), this.vehicle.width, this.vehicle.height);
            ctx.restore();
        }
        
        
    };
};

module.exports = Vehicle;


/*
let bgCtx = document.getElementById('bg-canvas').getContext('2d');
        let sCtx = document.getElementById('static-canvas').getContext('2d')
bgCtx.save()
        sCtx.save()
        ctx.rotate(this.currentDir * Math.PI/180);
        bgCtx.rotate(this.currentDir * Math.PI/180);
        sCtx.rotate(this.currentDir * Math.PI/180);
 bgCtx.translate(-this.currentX, -this.currentY);
        sCtx.translate(-this.currentX, -this.currentY);
 bgCtx.restore()
        
        
        sCtx.restore()
*/