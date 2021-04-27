const RAD = Math.PI/180;

class Vehicle {
    constructor(ball) {
        this.ball = ball;
        this.directions = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
        this.currentDir = 270;
        this.currentAngle = this.currentDir;
        this.minAngle = 0; 
        this.maxAngle = 360;
        this.minX = 50; 
        this.maxX = 900;
        this.currentX = 50;
        this.currentY = 625;
        this.currentPos = [this.currentX, this.currentY]
    };

    rotateLeft() {
        // console.log(this.currentDir)
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
        // console.log(this.currentDir)
        if(this.currentAngle <= this.maxAngle && this.currentAngle > this.minAngle) {
            this.currentAngle -= 30;
        } else if (this.currentAngle === 0) {
            this.currentAngle = 330;
        }
       if(this.directions.includes(this.currentAngle)) {
           this.currentDir = this.currentAngle;
       }
    }

    moveForward() {
        // console.log(this.currentDir)
        this.detectBall();
        if(this.currentX <= this.maxX && this.currentX >= this.minX) {
            if(this.currentDir === 360 || this.currentDir === 0) {
                this.currentY -= 5
            } else if (this.currentDir === 270) {
                this.currentX += 5;
            } else if (this.currentDir === 90) {
                this.currentX -= 5;
            } else if (this.currentDir === 180) {
                this.currentY += 5;
            } else if (this.currentDir === 240 || this.currentDir === 210) {
                this.currentX += 5;
                this.currentY += 5;
            } else if (this.currentDir === 300 || this.currentDir === 330) {
                this.currentX += 5;
                this.currentY -= 5;
            } else if (this.currentDir === 150 || this.currentDir === 120 ) {
                this.currentX -= 5;
                this.currentY += 5;
            } else if (this.currentDir === 30 || this.currentDir === 60) {
                this.currentX -= 5;
                this.currentY -= 5;
            }
        }
    }

    moveBackward() {
         if(this.currentX <= this.maxX && this.currentX >= this.minX) {
            if(this.currentDir === 360 || this.currentDir === 0) {
                this.currentY += 5
            } else if (this.currentDir === 270) {
                this.currentX -= 5;
            } else if (this.currentDir === 90) {
                this.currentX += 5;
            } else if (this.currentDir === 180) {
                this.currentY -= 5;
            }
        }
    }

    detectBall () {
        const yDiff1 = (this.ball.currentY - this.currentY);
        const yDiff2 = (this.currentY - this.ball.currentY);
        const xDiff1 = (this.ball.currentX - this.currentX);
        const xDiff2 = (this.currentX - this.ball.currentX);

        if ((xDiff1 === 5 && xDiff2 === -5) && ((yDiff1 >= -25 && yDiff1 <= -55) || (yDiff2 >= 25 && yDiff2 <= 55))) {
            if(this.currentDir === 270) {this.ball.detectCollision(this.currentDir)}
        } else if ((yDiff1 === -5 && yDiff2 === 5) && ((xDiff1 >= -10 && xDiff1 <= -60) || (xDiff2 >= 10 && xDiff2 <= 60))) {
            if(this.currentDir === 180) {this.ball.detectCollision(this.currentDir)}
        } else if((xDiff1 === -90 && xDiff2 === 90) && ((yDiff1 >= -60 && yDiff1 <= -10) || (yDiff2 >= 10 && yDiff2 <= 60))) {
            if(this.currentDir === 90) {this.ball.detectCollision(this.currentDir)}
        } else if ((yDiff1 === -95 && yDiff2 === 95) && ((xDiff1 >= -10 && xDiff1 <= -60) || (xDiff2 >= 10 && xDiff2 <= 60))) {
            if(this.currentDir === 360 || this.currentDir === 0) {this.ball.detectCollision(this.currentDir)}
        } 
            // console.log('x1 ' + xDiff1)
            // console.log('x2 ' + xDiff2)
            // console.log('y1 ' + yDiff1)
            // console.log('y2 ' + yDiff2)
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.currentX, this.currentY);
        ctx.rotate(this.currentDir * RAD);

        this.vehicle = new Image();
        this.vehicle.onload = () => {
           ctx.drawImage(this.vehicle, this.currentX, this.currentY, -(this.vehicle.width / 10), -(this.vehicle.height / 10));
        }
        this.vehicle.src = `/public/images/car_imgs/${this.currentDir}.png`;

        ctx.restore();
    };
};

module.exports = Vehicle;