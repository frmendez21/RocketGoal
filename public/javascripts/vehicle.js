class Vehicle {
    constructor(ball) {
        this.ball = ball;
        this.directions = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
        this.currentDir = 270;
        this.currentAngle = this.currentDir;
        this.minAngle = 0; 
        this.maxAngle = 360;
        this.currentX = 75;
        this.currentY = 950;
        this.speed = 0;
        this.currentSpeed = 0;
        this.maxSpeed = 5;
    };

    rotateLeft() {
        if (this.currentAngle < this.maxAngle && this.currentAngle >= this.minAngle) {
            this.currentAngle += 30;
        } else if (this.currentAngle === 360) {
            this.currentAngle = 0;
        }

        if(this.directions.includes(this.currentAngle)) {
           this.currentDir = this.currentAngle;
       }
    }

    rotateRight() {

        if(this.currentAngle <= this.maxAngle && this.currentAngle > this.minAngle) {
            this.currentAngle -= 30;
        } else if (this.currentAngle === 0) {
            this.currentAngle = 330;
        }
       if(this.directions.includes(this.currentAngle)) {
           this.currentDir = this.currentAngle;
       }
    }

    moveForward(e) {
        if(this.maxSpeed > this.speed && e.type === 'keydown') {
            this.speed += 0.2;
            this.currentSpeed = Math.floor(this.speed);
        } 
    }

    reduceSpeed(e) {
        if(e.code === 'Space' && this.speed >= 0.4) {
            this.speed -= 0.4;
        } else if(e.key === 'w' && this.speed > 0){
            this.speed -= ((this.speed / 2));
        }
        this.currentSpeed = Math.floor(this.speed)
    
    }


    calcNextPos() {
        switch (this.currentDir) {
            case 270:
                this.currentX += this.currentSpeed;
                break;
            case 360: case 0:
                this.currentY -= this.currentSpeed;
                break;
            case 90: 
                this.currentX -= this.currentSpeed;
                break;
            case 180: 
                this.currentY += this.currentSpeed;
                break;
            case 240: case 210: 
                this.currentX += this.currentSpeed;
                this.currentY += this.currentSpeed / 2;
                break;
            case 300: case 330: 
                this.currentX += this.currentSpeed;
                this.currentY -= this.currentSpeed / 2;
                break;
            case 150: case 120:
                this.currentX -= this.currentSpeed;
                this.currentY += this.currentSpeed / 2;
                break;
            default:
                this.currentX -= this.currentSpeed;
                this.currentY -= this.currentSpeed / 2
                break;
        }
    };
 
    draw(ctx) {
        this.calcNextPos();
        let x = Math.cos(Math.PI/180 * this.currentDir)
        let y = Math.sin(Math.PI/180 * this.currentDir)
        ctx.save();
        ctx.rotate(this.currentDir * Math.PI/180);
        ctx.translate(x, y);
        this.vehicle = new Image();
        this.vehicle.onload = () => {
           ctx.clearRect(0, 0, 1425, 1000)
           ctx.drawImage(this.vehicle, this.currentX, this.currentY, -(this.vehicle.width / 8), -(this.vehicle.height / 8));
        }
        this.vehicle.src = `/public/images/car_imgs/${this.currentDir}.png`;

        ctx.restore();
    };
};

module.exports = Vehicle;