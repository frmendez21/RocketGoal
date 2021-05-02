class BlueOrbs {
    constructor() {
        this.count = 1;
        this.ball1 = [350, 500];
        this.ball2 = [1375, 950];
        this.ball3 = [30, 740];
        this.ball4 = [1375, 650];
        this.ball5 = [1375, 325];

    }
    incrementCount() {
        if(this.count >= 5) {
            this.count = 1;
        } else {
            this.count ++;
        }
    }

    draw(ctx) {
        
        ctx.save()
        this.incrementCount();
        this.orb = new Image()
        this.orb.onload = () => {
            ctx.drawImage(this.orb, 350, 550, 25, 25)
            ctx.drawImage(this.orb, 1375, 950, 25, 25)
            ctx.drawImage(this.orb, 30, 740, 25, 25)
            ctx.drawImage(this.orb, 1375, 650, 25, 25)
            ctx.drawImage(this.orb, 1375, 325, 25, 25)
        };
        this.orb.src = `public/images/orbs/${this.count}.png`
        ctx.restore()
    }
}

module.exports = BlueOrbs;