class BlueOrbs {
    constructor() {
        this.count = 0;
        this.xPos = [350, 1375, 30, 1375, 1375];
        this.yPos = [500, 950, 740, 50, 325];
        this.height = 25;
        this.width = 25;
    }

    draw(ctx) {
        this.count >= 4 ? this.count =  0 : this.count ++ ;
        ctx.save()
        this.orb = new Image()
        this.orb.onload = () => {
            ctx.drawImage(this.orb, this.xPos[0], this.yPos[0], 25, 25)
            ctx.drawImage(this.orb, this.xPos[1], this.yPos[1], 25, 25)
            ctx.drawImage(this.orb, this.xPos[2], this.yPos[2], 25, 25)
            ctx.drawImage(this.orb, this.xPos[3], this.yPos[3], 25, 25)
            ctx.drawImage(this.orb, this.xPos[4], this.yPos[4], 25, 25)
        };
        this.orb.src = `public/images/orbs/${this.count}.png`
        ctx.restore()
    }
}

module.exports = BlueOrbs;