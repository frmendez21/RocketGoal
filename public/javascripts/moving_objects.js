class MovingObject {
    findDistance(x1, y1, x2, y2) {
       return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        // return Math.hypot(x2-x1, y2-y1)
    } 
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
}

module.exports = MovingObject;