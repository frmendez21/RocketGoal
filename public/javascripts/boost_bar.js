class BoostBar {
    constructor() {
        this.boostLevel = 294;
    };

    decrementBoost() {
        if(this.boostLevel > 0) {
            this.boostLevel -= 1;
        };
    };

    incrementBoost() {
        if(this.boostLevel < 294 && this.boostLevel >= 147) {
            this.boostLevel = 294;
        } else if(this.boostLevel < 147 && this.boostLevel >= 0 ) {
            this.boostLevel = 147;
        } 
    };

    reset() {
        this.boostLevel = 294;
    };

    draw(ctx) {
        let y = (window.scrollY + 170);
        let x = 0;
        ctx.strokeRect(x, y, 40, 300)
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgb(45, 45, 50)'
        ctx.fillRect(x + 3, y + 3, 35, this.boostLevel)
        ctx.fillStyle = 'rgb(83, 210, 209, 0.8)'
    };
};

module.exports = BoostBar;