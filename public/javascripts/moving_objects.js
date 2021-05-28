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
                if((group === this.track.group5) && ((this.currentX >= x) && (this.currentX <=900 ))) this.barrierDetected = true;
            }
        };
    };
}

module.exports = MovingObject;