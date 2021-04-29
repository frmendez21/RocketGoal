   // moveForward() {

    //     this.detectBall();
    //     this.speed += .05;
    //     this.impact = Math.floor(this.speed)
    //     if(this.currentX <= this.maxX && this.currentX >= this.minX) {
    //         if(this.currentDir === 360 || this.currentDir === 0) {
    //             this.currentY -= 5
    //         } else if (this.currentDir === 270) {
    //             this.currentX += (this.impact);
    //         } else if (this.currentDir === 90) {
    //             this.currentX -= 5;
    //         } else if (this.currentDir === 180) {
    //             this.currentY += 5;
    //         } else if (this.currentDir === 240 || this.currentDir === 210) {
    //             this.currentX += 5;
    //             this.currentY += 5;
    //         } else if (this.currentDir === 300 || this.currentDir === 330) {
    //             this.currentX += 5;
    //             this.currentY -= 5;
    //         } else if (this.currentDir === 150 || this.currentDir === 120 ) {
    //             this.currentX -= 5;
    //             this.currentY += 5;
    //         } else if (this.currentDir === 30 || this.currentDir === 60) {
    //             this.currentX -= 5;
    //             this.currentY -= 5;
    //         }
    //     }
    // }

    // moveBackward() {
    //      if(this.currentX <= this.maxX && this.currentX >= this.minX) {
    //         if(this.currentDir === 360 || this.currentDir === 0) {
    //             this.currentY += 5
    //         } else if (this.currentDir === 270) {
    //             this.currentX -= 5;
    //         } else if (this.currentDir === 90) {
    //             this.currentX += 5;
    //         } else if (this.currentDir === 180) {
    //             this.currentY -= 5;
    //         }
    //     }
    // }

    // detectBall () {
    //     const yDiff1 = (this.ball.currentY - this.currentY);
    //     const yDiff2 = (this.currentY - this.ball.currentY);
    //     const xDiff1 = (this.ball.currentX - this.currentX);
    //     const xDiff2 = (this.currentX - this.ball.currentX);
    //     // console.log(this.impact)
    //     if ((xDiff1 === 5 && xDiff2 === -5) && ((yDiff1 >= -25 && yDiff1 <= -55) || (yDiff2 >= 25 && yDiff2 <= 55))) {
    //         if(this.currentDir === 270) {
    //             this.ball.detectCollision(this.currentDir, this.impact)
    //             this.impact = 0;
    //         }
    //     } else if ((yDiff1 === -5 && yDiff2 === 5) && (
    //         (xDiff1 >= -10 && xDiff1 <= -60) || (xDiff2 >= 10 && xDiff2 <= 60))) {
    //         if(this.currentDir === 180) {
    //             this.ball.detectCollision(this.currentDir, this.impact)
    //             this.impact = 0;
    //         }
    //     } else if((xDiff1 === -90 && xDiff2 === 90) && ((yDiff1 >= -60 && yDiff1 <= -10) || (yDiff2 >= 10 && yDiff2 <= 60))) {
    //         if(this.currentDir === 90) {
    //             this.ball.detectCollision(this.currentDir, this.impact)
    //             this.impact = 0;
    //         }
    //     } else if ((yDiff1 === -95 && yDiff2 === 95) && ((xDiff1 >= -10 && xDiff1 <= -60) || (xDiff2 >= 10 && xDiff2 <= 60))) {
    //         if(this.currentDir === 360 || this.currentDir === 0) {
    //             this.ball.detectCollision(this.currentDir, this.impact)
    //             this.impact = 0;
    //         }
    //     } 
        
    // }


    //BALL


    // detectCollision(angle, impact) {
    //     console.log(impact)
    //     if (angle === 270) {
    //         this.currentX += (this.velocity + (impact * 10))
    //     } else if(angle === 90) {
    //         this.currentX -= this.velocity;
    //     } else if (angle === 180) {
    //         this.currentY += this.velocity 
    //     } else if (angle === 0 || angle === 360) {
    //         this.currentY -= this.velocity;
    //     }
    // }